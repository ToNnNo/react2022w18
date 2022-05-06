export function Number(value) {
    return new Intl.NumberFormat('fr-FR').format(value);
}