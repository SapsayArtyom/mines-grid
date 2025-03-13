import { Suspense, use, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

function App() {
    const { theme } = useTheme();

    useEffect(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
