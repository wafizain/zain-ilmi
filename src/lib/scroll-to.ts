/**
 * Smooth scroll ke section dengan offset navbar.
 * Dipakai bersama di Navbar dan Footer.
 */
export const NAV_OFFSET = 80;

export function scrollToSection(id: string, offset = NAV_OFFSET) {
  if (typeof window === "undefined") return;

  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  // Sync URL hash tanpa native jump
  if (history.pushState) {
    history.pushState(null, "", `#${id}`);
  }
}
