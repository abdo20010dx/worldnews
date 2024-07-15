import { calculatePagination } from "./calcPagination";
import { gnews_apikey_array, Gnews_categories, Gnews_countries } from "./gnews-api";
import { Cards, GnewsRes } from "./gnewsResponse";

let counter = 0;

export async function requestGnews(
    country: keyof typeof Gnews_countries = "eg",
    page: number = 1,
    category: keyof typeof Gnews_categories = "general"
): Promise<any> {
    const apikey = gnews_apikey_array[counter];
    const apiQuery = {
        country,
        apikey,
        page,
        expand: "content",
        max: 10,
        category,
    };

    let url = `https://gnews.io/api/v4/top-headlines?${new URLSearchParams(apiQuery as any)}`;
    try {
        const response = await fetch(url, { cache: "no-cache" });
        if (response.status >= 400) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { articles: data, totalArticles } = await response.json();
        const meta = calculatePagination(10, +totalArticles, page);
        return { data, meta } as Cards;
    } catch (error) {
        console.error('Error fetching data:', error);

        // Handle retry logic here
        if (counter < gnews_apikey_array.length - 1) {
            counter++;
            return await requestGnews(country, page, category);
        } else {
            // Reset counter and throw the error if all retries fail
            counter = 0;
            throw error;
        }
    }
}
