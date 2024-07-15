export function splitContentInThree(text: string = "") {
    if (!text) return ""
    const arrText = text.split(" ")
    const remainder = arrText.length % 3
    const divisor = Math.floor(arrText.length / 3);


    const sep1 = remainder === 2 || remainder === 1 ? 1 : 0;
    const sep2 = remainder === 1 || remainder === 0 ? 0 : 1;

    const string1 = arrText.slice(0, divisor + sep1).join(" ");
    const string2 = arrText.slice(divisor + sep1, (divisor * 2) + sep1 + sep2).join(" ");
    const string3 = arrText.slice((divisor * 2) + sep1 + sep2).join(" ");

    return [string1, string2, string3];


}



export function splitStringInThree(string: string) {
    if (string.length <= 3) return string.split('');

    const remainder = string.length % 3;
    const divisor = Math.floor(string.length / 3);

    const sep1 = remainder === 2 || remainder === 1 ? 1 : 0;
    const sep2 = remainder === 1 || remainder === 0 ? 0 : 1;

    const string1 = string.slice(0, divisor + sep1);
    const string2 = string.slice(divisor + sep1, (divisor * 2) + sep1 + sep2);
    const string3 = string.slice((divisor * 2) + sep1 + sep2);

    return [string1, string2, string3];
}