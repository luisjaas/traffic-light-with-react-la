import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [selectedColor, setSelectedColor] = useState("green")
	

	return(
		<>
			<div className="box"></div>
			<div className="semaforo">
			
				<div
					onClick={(event) => setSelectedColor("red")} 
					className={"red" + (selectedColor === "red" ? " led" : "")}>

				</div>
			
				<div
					onClick={(event) => setSelectedColor("yellow")}  
					className={"yellow" + (selectedColor === "yellow" ? " led" : "")}>

				</div>
			
				<div
					onClick={(event) => setSelectedColor("green")}  
					className={"green" + (selectedColor === "green" ? " led" : "")}>
				</div>
			</div>

			<button 
				type="button" 
				class="btn btn-dark"
				onClick={(event) => {
					if (selectedColor === "red") {
						setSelectedColor("yellow");
					} else if (selectedColor === "yellow") {
						setSelectedColor("green");
					} else if (selectedColor === "green") {
						setSelectedColor("red")
					}
				}}>
					Cambiar Color
			</button>
		
			
		</>
	);
};

export default Home;
