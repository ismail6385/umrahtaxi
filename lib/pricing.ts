
export type VehicleType =
    | 'Toyota Camry'
    | 'GMC Yukon'
    | 'Hyundai Staria'
    | 'Toyota Hiace'
    | 'Toyota Coaster'
    | 'Hyundai Starex';

export interface RoutePricing {
    [key: string]: { // key is vehicle name
        price: number;
    }
}

// Normalized Locations
export const LOCATIONS = ['Jeddah', 'Makkah', 'Madinah', 'Taif', 'Riyadh', 'Yanbu'];

export const PRICING_RULES: { [route: string]: RoutePricing } = {
    // Jeddah <-> Makkah
    'jeddah-makkah': {
        'Toyota Camry': { price: 200 },
        'GMC Yukon': { price: 400 },
        'Hyundai Staria': { price: 250 },
        'Hyundai Starex': { price: 220 },
        'Toyota Hiace': { price: 350 },
        'Toyota Coaster': { price: 500 },
    },
    // Jeddah <-> Madinah
    'jeddah-madinah': {
        'Toyota Camry': { price: 450 },
        'GMC Yukon': { price: 800 },
        'Hyundai Staria': { price: 600 },
        'Hyundai Starex': { price: 550 },
        'Toyota Hiace': { price: 700 },
        'Toyota Coaster': { price: 1000 },
    },
    // Makkah <-> Madinah
    'makkah-madinah': {
        'Toyota Camry': { price: 400 },
        'GMC Yukon': { price: 750 },
        'Hyundai Staria': { price: 550 },
        'Hyundai Starex': { price: 500 },
        'Toyota Hiace': { price: 650 },
        'Toyota Coaster': { price: 900 },
    },
    // Taif <-> Makkah
    'makkah-taif': {
        'Toyota Camry': { price: 300 },
        'GMC Yukon': { price: 500 },
        'Hyundai Staria': { price: 400 },
        'Hyundai Starex': { price: 350 },
        'Toyota Hiace': { price: 450 },
        'Toyota Coaster': { price: 700 },
    },
};

export function normalizeLocation(loc: string): string | null {
    if (!loc) return null;
    const lower = loc.toLowerCase();
    for (const city of LOCATIONS) {
        if (lower.includes(city.toLowerCase())) {
            return city;
        }
    }
    return null;
}

export function getPrice(from: string, to: string, vehicle: string): number | null {
    const loc1 = normalizeLocation(from);
    const loc2 = normalizeLocation(to);

    if (!loc1 || !loc2 || !vehicle) return null;

    // Create route key (alphabetical order to handle bidirectional)
    const routeKey = [loc1.toLowerCase(), loc2.toLowerCase()].sort().join('-');
    const routeKeyDirect = `${loc1.toLowerCase()}-${loc2.toLowerCase()}`;

    // Check rules
    const rules = PRICING_RULES[routeKey] || PRICING_RULES[routeKeyDirect];

    if (rules && rules[vehicle]) {
        return rules[vehicle].price;
    }

    return null;
}
