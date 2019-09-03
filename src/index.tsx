import React, { useEffect, useRef, useCallback } from 'react';

interface IframeProps extends React.HTMLAttributes<HTMLIFrameElement> {
    onInferredClick: (iframe: HTMLIFrameElement) => void;
}

export default function Iframe(props: IframeProps): React.ReactElement {
    const iframeRef = useRef<null | HTMLIFrameElement>(null);

    const iframeCallbackRef = useCallback(
        (node: null | HTMLIFrameElement): void => {
            iframeRef.current = node;
        },
        [],
    );

    useEffect(() => {
        const onBlur = () => {
            if (
                document.activeElement &&
                document.activeElement.nodeName.toLowerCase() === 'iframe' &&
                iframeRef.current &&
                iframeRef.current === document.activeElement
            ) {
                // infer a click event
                props.onInferredClick(iframeRef.current);
            }
        };

        window.addEventListener('blur', onBlur);

        return () => {
            window.removeEventListener('blur', onBlur);
        };
    }, []);

    return <iframe {...props} ref={iframeCallbackRef} />;
}
