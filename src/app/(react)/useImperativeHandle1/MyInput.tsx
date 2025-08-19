import { useRef, useImperativeHandle } from 'react';

function MyInput({ ref, ...props }) {
    const inputRef = useRef(null);
    //只暴露这两个DOM方法出去
    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            scrollIntoView() {
                inputRef.current.scrollIntoView();
            },
        };
    }, []);

    return <input {...props} ref={inputRef} />;
};

export default MyInput;
