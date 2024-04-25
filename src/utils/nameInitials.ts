export default function nameInitials(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);

    const initials = firstInitial.toUpperCase() + lastInitial.toUpperCase();

    return initials;
}
