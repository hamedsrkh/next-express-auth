import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import type {ReactNode} from "react";
import {CssBaseline} from "@mui/material";
import {CustomTheme} from "@/theme";

function MuiProvider({children}: { children: ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={CustomTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}

export default MuiProvider;
