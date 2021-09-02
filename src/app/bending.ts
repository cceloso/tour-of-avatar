import { Ability } from './ability';

export interface Bending {
    name: string,
    source: string,
    'learned from': string,
    'alternative styles': string[],
    // abilities: {
    //     general: string[],
    //     advanced: string[],
    //     'avatar level': string[],
    //     'special techniques': string[]
    // },
    abilities: Ability,
    weapons: string[],
    weaknesses: string[]
}