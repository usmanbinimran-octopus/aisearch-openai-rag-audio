/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                purple: {
                    600: "rgb(43, 137, 241)", // Override the original bg-purple-600 color
                    },
                customBlue: '#0061ff',
                customEmint: '#00386d',
                customPurple: {
                    DEFAULT: 'rgb(10, 88, 202)', // This is your custom color
                    opacity: {
                        100: 'rgba(10, 88, 202, 1)',
                        90: 'rgba(10, 88, 202, 0.9)',
                        80: 'rgba(10, 88, 202, 0.8)',
                        // Add more opacity levels as needed
                    }
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))"
                }
            },
            backgroundImage: {
                'gradient-to-customBlue': 'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))',
                'gradient-from-customEmint': 'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))',
            },
            fontSize: {
                "7xl": ["4.5rem", { lineHeight: "1.3" }],
                "4xl": ["2.5rem", { lineHeight: "3.2rem" }],
                "3xl": ["2rem", { lineHeight: "2.8rem" }]
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
};
