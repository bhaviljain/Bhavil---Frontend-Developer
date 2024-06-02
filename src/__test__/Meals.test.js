import { render ,screen} from "@testing-library/react"
import Meals from "../TopRestaurants/Meals"

test('should first with logo', () => { 
    render(<Meals />)

    const topres = screen.getByText ("Top Restaurants Near You")
    expect(topres).toBeInTheDocument()
 })
 