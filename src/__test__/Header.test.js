import { render ,screen} from "@testing-library/react"
import Header from "../HeaderSection/Header"

test('should first load input search box', () => { 
    render(<Header />)
    const input = screen.getByRole("textbox") 
    expect(input).toBeInTheDocument()
    console.log(input);
 })