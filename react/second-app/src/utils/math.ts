export function sum(a: number, b: number): number {
    return a + b;
}

export function isEven(a: number): boolean {
    return a % 2 === 0 ? true : false;
}

// Union Type
export function sumOrConcat(
    a: number | string,
    b: number | string,
): number | string {
    if (typeof a === "string" || typeof b === "string") {
        return `${a} ${b}`;
    }
    return a + b;
}

type Status = "loading" | "success" | "failed";
export default function switcher(a: Status) {
    if (a === "success") return "success";
    else if (a === "failed") return "failed";
    return "loading";
}

// type FullName = {
//     firstName: string;
//     lastName: string;
// };

// type User = {
//     fullName: FullName;
//     age: number;
//     isStudent: boolean;
//     phoneNumber: string | null;
//     postalCode?: string;
// };

// export const student: User = {
//     // firstName: "ali",
//     // lastName: "bahrami",
//     fullName: {
//         firstName: "kfmvlfkm",
//         lastName: "fvmfld",
//     },
//     age: 12,
//     isStudent: true,
//     phoneNumber: null,
// };

// export const studentList: User[] = [
//     {
//         firstName: "dlkv",
//         lastName: "fmldfn",
//         age: 12,
//         isStudent: false,
//         phoneNumber: "5454",
//         postalCode: "fjnvkjdfs",
//     },
// ];

// interface User {
//     fullName: string;
//     age: number;
//     phoneNumber?: string;
// }

// interface Student extends User {
//     course: string[];
//     score: number;
// }

// export const student: Student = {
//     fullName: "sdjnvjkfsn",
//     age: 12,
//     phoneNumber: "115151",
//     course: ["html", "css"],
//     score: 16,
// };

type Person = {
    name: string;
};

type Employee = {
    score: number;
};

export const employeePerson: Person & Employee = {
    name: "ndknjfdsnfkd",
    score: 20,
};
