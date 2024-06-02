import { render , screen} from "@testing-library/react"
import Body from "../Body/body"

test('should first', () => { 
    render(<Body />)

    const name = screen.getByText("What's on your mind?")
    expect(name).toBeInTheDocument()
 })