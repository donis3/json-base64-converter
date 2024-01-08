"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { PropsWithoutRef, SVGProps } from "react";

/**
 * Fixed navbar
 */
export default function Navbar() {
	return (
		<nav
			className={cn(
				"w-full fixed top-0 left-0 z-20 bg-accent-foreground text-accent min-h-[var(--nav-height)] flex items-center justify-center  ",
				"bg-gradient-to-l from-blue-900   to-rose-950 dark:from-zinc-900 dark:to-zinc-950 shadow-md",
			)}>
			<div className="p-2 container flex flex-col md:flex-row justify-between items-center">
				<h2 className=" transition-transform duration-100 active:translate-y-0.5 ">
					<Link
						href="/"
						className="font-extrabold text-2xl tracking-tight text-white opacity-90">
						<Logo className="fill-white dark:fill-fuchsia-700 h-auto w-fit min-h-10 max-w-48" />
					</Link>
				</h2>
				<div className="flex-1 flex items-center justify-end  font-medium gap-1 ">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/about">Documentation</NavLink>
				</div>
			</div>
		</nav>
	);
}

/**
 * Path aware nav links
 * @param param0
 * @returns
 */
function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const path = usePathname();

	return (
		<Button
			asChild
			variant={"link"}
			size={"sm"}
			className={cn(
				"px-2 py-1 hover:bg-white/10 focus:bg-white/30  rounded-md text-white",
				path === href && "font-bold underline",
			)}>
			<Link href={href}>{children}</Link>
		</Button>
	);
}

function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="77.6047 307.0982 247.8199 69.8961"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-description="Base64 converter logo"
			{...props}>
			<path
				d="M 23.341 -23.183 Q 25.806 -21.348 27.222 -18.751 Q 28.638 -16.155 28.638 -13.113 Q 28.638 -10.385 27.484 -7.999 Q 26.331 -5.612 24.311 -3.829 Q 22.292 -2.046 19.617 -1.023 Q 16.942 0 13.9 0 L 2.623 0 L 2.623 -38.657 L 12.851 -38.604 Q 15.263 -38.604 17.414 -37.765 Q 19.564 -36.926 21.19 -35.483 Q 22.816 -34.041 23.734 -32.126 Q 24.652 -30.212 24.652 -28.009 Q 24.652 -25.386 23.341 -23.183 Z M 11.487 -29.74 L 11.487 -26.226 L 12.903 -26.226 Q 14.214 -26.278 15.001 -26.855 Q 15.788 -27.432 15.788 -28.009 Q 15.788 -28.533 15.001 -29.137 Q 14.214 -29.74 12.851 -29.74 Z M 13.9 -8.917 Q 15.053 -8.917 16.129 -9.258 Q 17.204 -9.599 18.017 -10.176 Q 18.83 -10.752 19.302 -11.513 Q 19.774 -12.274 19.774 -13.113 Q 19.774 -13.952 19.302 -14.739 Q 18.83 -15.526 18.017 -16.103 Q 17.204 -16.679 16.129 -17.02 Q 15.053 -17.361 13.9 -17.361 L 12.955 -17.361 L 12.851 -17.361 L 11.487 -17.361 L 11.487 -8.917 Z M 47.695 -27.799 Q 50.37 -27.537 52.652 -26.383 Q 54.934 -25.229 56.638 -23.367 Q 58.343 -21.505 59.313 -19.092 Q 60.284 -16.679 60.284 -13.952 Q 60.284 -11.067 59.182 -8.523 Q 58.081 -5.979 56.193 -4.091 Q 54.304 -2.203 51.787 -1.101 Q 49.269 0 46.384 0 Q 43.499 0 40.955 -1.101 Q 38.412 -2.203 36.523 -4.091 Q 34.635 -5.979 33.534 -8.523 Q 32.432 -11.067 32.432 -13.952 Q 32.432 -17.099 33.796 -19.931 L 43.185 -38.552 L 53.15 -38.552 Z M 46.384 -8.917 Q 48.482 -8.917 49.951 -10.385 Q 51.419 -11.854 51.419 -13.952 Q 51.419 -15.001 51.026 -15.919 Q 50.633 -16.837 49.951 -17.545 Q 49.269 -18.253 48.351 -18.646 Q 47.433 -19.04 46.384 -19.04 Q 45.335 -19.04 44.417 -18.646 Q 43.499 -18.253 42.791 -17.545 Q 42.083 -16.837 41.69 -15.919 Q 41.296 -15.001 41.296 -13.952 Q 41.296 -12.903 41.69 -11.985 Q 42.083 -11.067 42.791 -10.385 Q 43.499 -9.703 44.417 -9.31 Q 45.335 -8.917 46.384 -8.917 Z M 81.61 -38.604 L 90.474 -38.604 L 90.474 0 L 81.61 0 L 81.61 -6.819 L 66.136 -6.819 L 66.136 -15.683 L 66.136 -15.683 L 66.136 -15.683 Z M 76.837 -15.683 L 81.61 -15.683 L 81.61 -22.711 Z M 145.085 -0.052 Q 141.361 -0.052 137.821 -1.442 Q 134.281 -2.832 131.448 -5.665 Q 128.721 -8.445 127.278 -11.933 Q 125.836 -15.421 125.836 -19.302 Q 125.836 -23.236 127.278 -26.724 Q 128.721 -30.212 131.448 -32.939 Q 134.281 -35.772 137.847 -37.188 Q 141.414 -38.604 145.112 -38.604 Q 148.81 -38.604 152.35 -37.188 Q 155.89 -35.772 158.723 -32.939 L 152.481 -26.698 Q 150.96 -28.219 149.019 -28.979 Q 147.079 -29.74 145.085 -29.74 Q 143.092 -29.74 141.178 -28.979 Q 139.263 -28.219 137.742 -26.698 Q 136.274 -25.177 135.487 -23.288 Q 134.7 -21.4 134.7 -19.302 Q 134.7 -17.204 135.487 -15.342 Q 136.274 -13.48 137.742 -11.959 Q 139.263 -10.438 141.178 -9.677 Q 143.092 -8.917 145.085 -8.917 Q 147.079 -8.917 149.019 -9.677 Q 150.96 -10.438 152.481 -11.959 L 158.723 -5.665 Q 155.89 -2.832 152.376 -1.442 Q 148.862 -0.052 145.085 -0.052 Z M 179.465 -38.552 Q 183.451 -38.552 186.965 -37.031 Q 190.479 -35.509 193.102 -32.913 Q 195.725 -30.317 197.246 -26.803 Q 198.767 -23.288 198.767 -19.302 Q 198.767 -15.316 197.246 -11.802 Q 195.725 -8.287 193.102 -5.691 Q 190.479 -3.095 186.965 -1.574 Q 183.451 -0.052 179.465 -0.052 Q 175.478 -0.052 171.964 -1.574 Q 168.45 -3.095 165.854 -5.691 Q 163.257 -8.287 161.736 -11.802 Q 160.215 -15.316 160.215 -19.302 Q 160.215 -23.288 161.736 -26.803 Q 163.257 -30.317 165.854 -32.913 Q 168.45 -35.509 171.964 -37.031 Q 175.478 -38.552 179.465 -38.552 Z M 179.465 -8.917 Q 181.615 -8.917 183.503 -9.73 Q 185.392 -10.543 186.808 -11.959 Q 188.224 -13.375 189.037 -15.263 Q 189.85 -17.152 189.85 -19.302 Q 189.85 -21.453 189.037 -23.341 Q 188.224 -25.229 186.808 -26.645 Q 185.392 -28.061 183.503 -28.874 Q 181.615 -29.687 179.465 -29.687 Q 177.314 -29.687 175.426 -28.874 Q 173.538 -28.061 172.122 -26.645 Q 170.705 -25.229 169.892 -23.341 Q 169.079 -21.453 169.079 -19.302 Q 169.079 -17.152 169.892 -15.263 Q 170.705 -13.375 172.122 -11.959 Q 173.538 -10.543 175.426 -9.73 Q 177.314 -8.917 179.465 -8.917 Z M 225.057 -38.499 L 233.921 -38.499 L 233.921 0 L 224.323 0 L 211.734 -22.449 L 211.734 0 L 202.87 0 L 202.87 -38.394 L 212.521 -38.394 L 225.057 -15.998 Z M 260.072 -38.814 L 269.46 -38.814 L 256.347 0 L 247.955 0 L 235.524 -38.814 L 244.861 -38.814 L 252.256 -15.001 Z M 295.399 -29.635 L 279.558 -29.635 L 279.558 -23.813 L 292.409 -23.813 L 292.409 -14.949 L 279.558 -14.949 L 279.558 -8.864 L 295.399 -8.864 L 295.399 0 L 270.694 0 L 270.694 -38.447 L 295.399 -38.499 Z M 313.089 -9.966 Q 312.407 -9.861 311.725 -9.808 Q 311.043 -9.756 310.309 -9.703 L 310.309 0 L 301.444 0 L 301.444 -38.394 L 310.309 -38.394 Q 313.613 -38.342 316.498 -37.188 Q 319.383 -36.034 321.559 -34.093 Q 323.736 -32.153 324.969 -29.582 Q 326.201 -27.012 326.201 -24.075 Q 326.201 -20.98 324.89 -18.332 Q 323.579 -15.683 321.219 -13.742 L 329.716 0 L 319.278 0 Z M 310.309 -18.62 Q 311.725 -18.673 313.01 -19.118 Q 314.295 -19.564 315.265 -20.299 Q 316.236 -21.033 316.786 -22.003 Q 317.337 -22.974 317.337 -24.075 Q 317.337 -25.177 316.786 -26.121 Q 316.236 -27.065 315.265 -27.799 Q 314.295 -28.533 313.01 -28.979 Q 311.725 -29.425 310.309 -29.478 Z M 357.173 -38.657 L 357.173 -29.74 L 349.778 -29.74 L 349.778 0 L 340.914 0 L 340.914 -29.74 L 333.57 -29.74 L 333.57 -38.657 Z M 386.583 -29.635 L 370.743 -29.635 L 370.743 -23.813 L 383.593 -23.813 L 383.593 -14.949 L 370.743 -14.949 L 370.743 -8.864 L 386.583 -8.864 L 386.583 0 L 361.878 0 L 361.878 -38.447 L 386.583 -38.499 Z M 404.273 -9.966 Q 403.591 -9.861 402.909 -9.808 Q 402.227 -9.756 401.493 -9.703 L 401.493 0 L 392.629 0 L 392.629 -38.394 L 401.493 -38.394 Q 404.797 -38.342 407.682 -37.188 Q 410.567 -36.034 412.744 -34.093 Q 414.92 -32.153 416.153 -29.582 Q 417.386 -27.012 417.386 -24.075 Q 417.386 -20.98 416.074 -18.332 Q 414.763 -15.683 412.403 -13.742 L 420.9 0 L 410.462 0 Z M 401.493 -18.62 Q 402.909 -18.673 404.194 -19.118 Q 405.479 -19.564 406.45 -20.299 Q 407.42 -21.033 407.971 -22.003 Q 408.521 -22.974 408.521 -24.075 Q 408.521 -25.177 407.971 -26.121 Q 407.42 -27.065 406.45 -27.799 Q 405.479 -28.533 404.194 -28.979 Q 402.909 -29.425 401.493 -29.478 Z"
				transform="matrix(0.544795, 0, 0, 0.934202, 94.568132, 360.668493)"
			/>
			<g transform="matrix(0.8373170495033263, 0, 0, 0.7465469837188721, 77.6047070440404, 307.09817993002184)">
				<path
					d="m -155.19867,3.843837 c -0.11771,0.7062523 -0.26051,1.4430903 -0.31729,1.6371093 -0.12284,0.4197085 1.24429,2.9982583 1.58957,2.9982583 0.40296,0 2.22009,2.8193474 1.97506,3.0644044 -0.12613,0.1261 -0.5864,0.0635 -1.02267,-0.138986 -1.90719,-0.885269 -2.94566,-1.304634 -3.43908,-1.390094 -14.2186,-4.0827327 -27.26264,-8.3834288 -43.49657,1.70479 -2.79556,1.628246 -5.56633,4.216082 -6.92568,5.904547 -1.82095,2.261817 -2.92428,4.79216 -4.09589,7.287922 -0.99451,2.116667 -1.55847,3.019425 -1.30915,4.124961 -0.0385,3.066362 2.80513,1.380728 3.64333,-0.282285 0.93779,-1.482646 2.70405,-3.735308 3.60924,-5.519129 10.7891,-17.9805016 37.65217,-14.0017768 53.35894,-5.063093 1.73387,0.545385 1.88775,0.66712 1.32292,1.047988 -0.68765,0.463682 -3.11113,1.144746 -4.94646,1.389592 -2.16361,0.28866 -4.86932,1.344824 -5.6586,2.209165 -0.92479,1.012745 -1.02375,2.46073 -0.24442,3.573409 0.6358,0.907733 0.71096,0.874236 2.70526,0.278024 5.6383,-1.30511 9.2338,-2.938039 13.69425,-3.806481 2.5767,-0.288237 2.62361,-3.813439 0.11785,-8.84338 -1.44555,-3.3546 -4.03789,-6.1811962 -5.66013,-9.2335618 -1.0314,-2.2402006 -4.40843,-3.79034139 -4.90048,-0.9431602 z m 19.30787,29.967159 c 2.97407,7.042336 3.1511,17.749917 1.40663,24.413501 -2.83097,7.724299 -7.66189,15.836292 -12.86587,22.143853 -2.28219,2.716239 -7.02024,6.427523 -8.20571,6.427523 -0.29361,0 -0.32557,-0.425292 -0.11319,-1.49913 0.16312,-0.824626 0.56433,-3.303878 0.89194,-5.509736 0.55991,-3.769704 0.55978,-4.07752 -0.003,-5.122677 -0.32938,-0.611611 -1.07421,-1.322599 -1.65518,-1.579748 -1.6578,-0.733822 -2.63298,0.09403 -2.92645,2.484596 -0.12679,1.032934 -0.31015,2.513092 -0.4072,3.289195 -0.40962,2.954337 -1.0741,5.623216 -1.43817,8.643408 -0.1253,1.067144 -0.28675,2.040996 -0.35864,2.164212 0.51761,5.474547 4.743,3.895646 7.79852,3.738272 1.74625,-0.08477 5.45899,-0.587428 8.25063,-1.116727 2.79167,-0.529299 5.39192,-0.879316 5.77845,-0.778246 0.47339,0.123799 1.09532,-0.186637 1.90481,-0.95033 1.6533,-1.964558 -0.44733,-5.238089 -2.2221,-4.532551 -0.55637,0.224632 -2.20244,0.647727 -3.65763,0.940515 -1.45521,0.292814 -3.04289,0.613463 -3.52795,0.712629 -0.83534,0.170762 -0.84386,0.157347 -0.16743,-0.263049 0.39277,-0.244105 1.5834,-1.393825 2.64583,-2.55487 1.06241,-1.160991 2.11582,-2.272427 2.34093,-2.469621 10.58119,-14.939142 17.74123,-24.378179 12.2659,-48.389804 -1.71979,-4.80105 -8.42351,-6.670861 -5.73495,-0.191215 z m -80.97595,10.572989 c -2.47189,2.591064 -2.61858,2.772118 -5.60895,6.892104 -0.73046,1.006369 -1.76477,2.385298 -2.29804,3.064404 -2.42509,3.088111 -2.97463,4.140915 -2.56315,4.909768 0.96967,1.811866 3.4313,0.485457 6.51327,-3.509857 2.23796,-2.90113 3.41009,-3.965231 2.89804,-2.630832 -0.88511,2.306532 -1.05003,6.718856 -0.44236,11.814255 2.65425,15.868623 7.6748,28.3337 34.66817,30.876663 2.75185,0.262943 7.53925,0.591026 6.44922,-4.54443 -0.65974,-0.838835 -0.91064,-0.904187 -3.25615,-0.848519 -15.28141,1.512305 -30.04367,-6.463268 -32.53753,-24.601593 -0.68133,-3.843126 -0.86326,-9.110689 -0.40772,-11.818409 0.0816,-0.48506 0.26646,-1.634199 0.41081,-2.553837 0.14436,-0.919666 0.4064,-1.583108 0.5824,-1.474338 0.17598,0.10877 0.71552,0.940541 1.19838,1.848458 0.48281,0.907865 1.58396,2.761959 2.44737,4.120171 0.86339,1.358186 1.57665,2.664857 1.58491,2.903697 0.033,0.956204 3.31856,1.01772 3.91607,0.07339 0.86558,-2.652368 -3.0984,-7.870084 -4.71189,-10.346663 -3.00884,-4.416531 -3.71017,-9.442318 -8.84285,-4.174437 z"
					color="#000"
					overflow="visible"
					transform="translate(227.4612,-2.2991317)"
				/>
			</g>
		</svg>
	);
}
