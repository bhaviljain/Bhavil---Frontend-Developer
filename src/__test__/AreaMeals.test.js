import { render ,screen} from "@testing-library/react"
import AreaMeals from "../FilterArea/AreaMeals"

test('should load button', () => { 
 
    render(<AreaMeals />)

    const button =  screen.getByRole('button')
    expect(button).toBeInTheDocument()

 })
