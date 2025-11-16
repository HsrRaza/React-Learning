export const loginUser = async ({ email, password }) => {
    //  simulate backend delay

    await new Promise((r) => setTimeout(r, 800));

    //   Mock login validation 

    if (email === "test@gmail.com" && password === "123456") {
        return {
            id: 1,
            name: "Raizen",
            email,
            token: "abc123xyz"
        };
    }

    throw new Error("Invalid email or password ");
}