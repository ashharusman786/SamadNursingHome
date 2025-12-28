import { useState, useEffect } from 'react';

type NetworkInformation = EventTarget & {
    effectiveType?: string;
    type?: string;
    addEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void;
    removeEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void;
};

interface NavigatorWithConnection extends Navigator {
    connection?: NetworkInformation;
}

interface UseNetworkStatusReturn {
    isOnline: boolean;
    isOffline: boolean;
    connectionType: string | null;
}

export function useNetworkStatus(): UseNetworkStatusReturn {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [connectionType, setConnectionType] = useState<string | null>(null);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        const updateConnectionType = () => {
            const nav = navigator as NavigatorWithConnection;
            if (nav.connection) {
                const { effectiveType, type } = nav.connection;
                setConnectionType(effectiveType || type || 'unknown');
            }
        };

        // Set initial connection type
        updateConnectionType();

        // Add event listeners
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        const nav = navigator as NavigatorWithConnection;
        if (nav.connection) {
            nav.connection.addEventListener('change', updateConnectionType);
        }

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);

            if (nav.connection) {
                nav.connection.removeEventListener('change', updateConnectionType);
            }
        };
    }, []);

    return {
        isOnline,
        isOffline: !isOnline,
        connectionType,
    };
}