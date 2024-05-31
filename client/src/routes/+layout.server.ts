import { redirect } from "@sveltejs/kit";

export function load({ route }) {
    if (route.id != "/") 
        throw redirect(302, "/");
}