import { describe, expect, it } from "vitest";
import { isLove } from "../src/flower";

describe('isLove', () => {
    it('devolver true si una flor tiene un numero par de petalos y la otra un numero impar', () => {
        
    const result1 = isLove(1, 4);
    console.log('Resultado 1:', result1); 

    expect(result1).toBe(true);
    });
  });
