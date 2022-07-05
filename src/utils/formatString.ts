export function formatAddress(str: string) {
    return str.slice(0, 8) + "..." + str.slice(-5);
}
