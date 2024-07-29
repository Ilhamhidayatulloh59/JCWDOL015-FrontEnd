import { useRef } from "react"

export default function RefComp() {
    const inputRef = useRef()
    const elementRef = useRef()

    const handleSubmit = () => {
        console.log(inputRef.current.value)
        elementRef.current.style.backgroundColor = 'orange'
        elementRef.current.style.color = 'red'
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>submit</button>
            <div style={{ backgroundColor: 'teal', height: '100px' }} ref={elementRef} >Hello World</div>
        </div>
    )
}