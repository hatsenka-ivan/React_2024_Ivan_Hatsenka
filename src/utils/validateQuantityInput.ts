import React from "react";

export function validateQuantityInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, "");
    return value ? parseInt(value) : 0;
}