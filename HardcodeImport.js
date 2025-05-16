class Meal {
	Dish = "";
	Category = "";
	Book = "";
	Porion = "";
	Ingreedients;
}

function HardData(){
	one = new Meal();
	one.Dish = "Gullgryte";
	one.Category = "Vegetar";
	one.Book = "Bare Bra Barnemat s.121";
	one.Portion = "2 voksne 2 barn";
	one.Ingreedients = "<li>1 stk Søtpotet</li>" +
		"<li>1 stk Gul Løk</li>" +
		"<li>3 fedd Hvitløk</li>" +
		"<li>1 stk Squash</li>" +
		"<li>4 stk Potet</li>" +
		"<li>2 stk Gulrot</li>" +
		"<li>2 dl Speltperler/Byggryn</li>" +
		"<li>1 pk Ferdigkokte Kikerter</li>" +
		"<li>1/2 ss Gurkemeiepulver</li>" +
		"<li>1 ss Currypulver</li>" +
		"<li>7 dl Melk</li>" +
		"<li>1 dl Fløte/Kokkosmelk</li>" +
		"<li>4 blader Grønnkål(NB: Kun barn over 12mnd)</li>";
	Meals.push(one);
			
	one = new Meal();
	one.Dish = "Rask Gnocchiform med brokkoli, ost og pesto";
	one.Category = "Vegetar";
	one.Book = "En Skikkelig Digg kokebok s.70";
	one.Portion = "4 porsjoner";
	one.Ingreedients = "<li>1 ts Salt</li>" +
		"<li>1 bukett Brokoli</li>" +
		"<li>2 stk Gulrøtter</li>" +
		"<li>500 g Fersk Potetgnocchi</li>" +
		"<li>230 g Hvite Bønner</li>" +
		"<li>800 g Tomatsaus</li>" +
		"<li>3 1/2 dl Valgfri Ost</li>";
	Meals.push(one);
	
	one = new Meal();
	one.Dish = "Pannekaner";
	one.Category = "Vegetar";
	one.Book = "<a href = 'https://www.matprat.no/oppskrifter/familien/pannekaker/'>https://www.matprat.no/oppskrifter/familien/pannekaker/</a>";
	one.Portion = "4 porsjoner";
	one.Ingreedients = "<li>3 dl hvetemel eller 50/50 siktet og sammalt hvetemel</li>" +
		"<li>0,5 ts Salt</li>" +
		"<li>5 dl Melk</li>" +
		"<li>4 stk. Egg</li>" +
		"<li>1 ss smør eller margarin</li>";
	Meals.push(one);
}