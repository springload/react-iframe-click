import React, { useEffect, useRef, useCallback } from 'react';

interface IframeProps
	extends React.DetailedHTMLProps<
		React.IframeHTMLAttributes<HTMLIFrameElement>,
		HTMLIFrameElement
	> {
	onInferredClick: (iframe: HTMLIFrameElement) => void;
}

export default function Iframe({ onInferredClick, ...props }: IframeProps): React.ReactElement {
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
                onInferredClick(iframeRef.current);
            }
        };

        window.addEventListener('blur', onBlur);

        return () => {
            window.removeEventListener('blur', onBlur);
        };
    }, [onInferredClick]);

    return <iframe {...props} ref={iframeCallbackRef} />;
}
