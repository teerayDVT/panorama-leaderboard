var blog = {
	title: "Bitcoin, the World's Reserve Currency?",
	tldr: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere.",
			"Integer eget luctus ex. Nam fermentum quis quam vel sagittis.", 
			"Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem.",
			"Etiam eu lacus vitae felis dignissim tincidunt nec nec sem."],
	date: new Date().getTime(),
	content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere, dignissim turpis eget, feugiat nulla. In hac habitasse platea dictumst. Etiam tincidunt vitae nisl congue commodo. Integer tincidunt dolor nisi, ac sollicitudin metus rutrum et. Ut arcu magna, ultricies ut libero ut, posuere condimentum lorem. Integer eget luctus ex. Nam fermentum quis quam vel sagittis. Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem. Etiam eu lacus vitae felis dignissim tincidunt nec nec sem. Vivamus vitae varius ligula. Proin in malesuada ex. In mi mi, dictum at orci in, mattis imperdiet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lorem nibh, laoreet interdum magna pretium, laoreet faucibus mauris. Nam suscipit quam ut velit dapibus mollis. In a nunc consequat nulla sollicitudin luctus vitae a justo. Morbi id turpis dapibus, aliquam ligula in, dictum lacus. Praesent id mattis mi. Donec facilisis tristique mi eget pulvinar. Phasellus viverra vehicula ligula, nec imperdiet massa sagittis in. Sed eu leo tempor tortor elementum rutrum at at augue. Suspendisse potenti. Ut quis libero ullamcorper, consequat mauris non, egestas velit. Phasellus vitae pretium mi, non feugiat eros. Vestibulum hendrerit turpis gravida accumsan ullamcorper. Aliquam erat volutpat. Maecenas ornare velit id nisl vehicula, et auctor tellus dictum. Maecenas rhoncus orci ac dolor rhoncus tincidunt. Sed venenatis ac sapien at aliquet. Sed non nunc varius, eleifend lectus sit amet, euismod nibh. Quisque suscipit, orci eu molestie ullamcorper, nulla mi elementum lectus, a faucibus tortor massa eu turpis. Fusce sollicitudin, massa eu feugiat bibendum, magna dui dictum ante, vitae dictum eros tortor sit amet nulla. Pellentesque consequat sit amet nunc id pellentesque. Praesent in libero vel justo facilisis tincidunt a vitae mi. Cras fermentum urna a orci tincidunt, vitae sollicitudin nulla euismod. Pellentesque ac leo ullamcorper, suscipit elit sed, scelerisque odio. Sed sodales dolor quis ornare pretium. Donec ut viverra nisi, in laoreet ex. Praesent ultrices augue sit amet nunc vehicula, et rutrum metus sagittis. Sed aliquam mattis dolor, a cursus risus posuere vel. Suspendisse condimentum tellus dui, quis vehicula lacus tempus in. Vestibulum ac orci nec purus faucibus imperdiet. Suspendisse fringilla facilisis mauris non congue. In a ante quis velit ultricies varius a in justo. Donec tincidunt auctor egestas. Donec et felis nec nisi pharetra viverra eu ac metus. Cras euismod nibh eget nibh mollis efficitur sed pulvinar leo. Aenean vel eros tristique, molestie urna sit amet, mollis urna.",
	author: "Peter Schiff",
	likes: 110,
	dislikes: 12,
	topics: ["Philosophical", "big picture", "bitcoin"],
	age: function() {
		return Date.getTime() - this.date; 
	},
	printMe: function(){
		console.log(
			"Title: "+this.title+"\n"+
			"TLDR: "+this.printTldr()+
			"Content: "+this.content+"\n"+
			"Date: "+this.date+"\n"+
			"Author: "+this.author+"\n"+
			"Likes: "+this.likes+"\n"+
			"Dislikes: "+this.dislikes+"\n");
	},
	printTldr: function(){
		var res;
		for (var i=0; i<=this.tldr.length; i++){
			res += this.tldr[i] + "\n";
		}
		return res;
	}

}

console.log(blog.title);
console.log(blog["title"]);
console.log("\n");
console.log(blog.printMe);
console.log(blog.printMe());

// class Article {
// 	constructor(title, tldr, date, content, author, likes, dislikes, topics){
// 		this.title=title;
// 		this.tldr=tldr;
// 		this.content=content;
// 		this.date=date;
// 		this.author=author;
// 		this.likes=likes;
// 		this.dislikes=dislikes;
// 		this.topics=topics;
// 	}

// 	age() {
// 		return Date.getTime() - this.date; 
// 	}

// 	printMe(){
// 		console.log(
// 			"Title: "+this.title+"\n"+
// 			"TLDR: "+this.printTldr()+
// 			"Content: "+this.content+"\n"+
// 			"Date: "+this.date+"\n"+
// 			"Author: "+this.author+"\n"+
// 			"Likes: "+this.likes+"\n"+
// 			"Dislikes: "+this.dislikes+"\n");
// 	}

// 	printTldr(){
// 		var res;
// 		for (var i=0; i<=this.tldr.length; i++){
// 			res += this.tldr[i] + "\n";
// 		}
// 		console.log("========================================================================");
// 		return res;
// 	}

// 	printMeElegant(){
// 		var res;
// 		for (x in this){
// 			if (Array.isArray(this[x])){
// 				res += x + ":\t\t";
// 				for (var i=0; i<=this[x].length; i++){
// 					res += this[x][i] + ", ";
// 				}
// 				res += "\n";
// 			} else {
// 				res += x + ":\t\t" + this[x] + "\n";
// 			}
// 		}
// 		console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// 		return res;
// 	}
// }
// 
// var title1 = "Bitcoin, the World's Reserve Currency?";
// var tldr1 = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere.","Integer eget luctus ex. Nam fermentum quis quam vel sagittis.", "Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem.", "Etiam eu lacus vitae felis dignissim tincidunt nec nec sem."];
// var	date1 = new Date().getTime();
// var content1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere, dignissim turpis eget, feugiat nulla. In hac habitasse platea dictumst. Etiam tincidunt vitae nisl congue commodo. Integer tincidunt dolor nisi, ac sollicitudin metus rutrum et. Ut arcu magna, ultricies ut libero ut, posuere condimentum lorem. Integer eget luctus ex. Nam fermentum quis quam vel sagittis. Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem. Etiam eu lacus vitae felis dignissim tincidunt nec nec sem. Vivamus vitae varius ligula. Proin in malesuada ex. In mi mi, dictum at orci in, mattis imperdiet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lorem nibh, laoreet interdum magna pretium, laoreet faucibus mauris. Nam suscipit quam ut velit dapibus mollis. In a nunc consequat nulla sollicitudin luctus vitae a justo. Morbi id turpis dapibus, aliquam ligula in, dictum lacus. Praesent id mattis mi. Donec facilisis tristique mi eget pulvinar. Phasellus viverra vehicula ligula, nec imperdiet massa sagittis in. Sed eu leo tempor tortor elementum rutrum at at augue. Suspendisse potenti. Ut quis libero ullamcorper, consequat mauris non, egestas velit. Phasellus vitae pretium mi, non feugiat eros. Vestibulum hendrerit turpis gravida accumsan ullamcorper. Aliquam erat volutpat. Maecenas ornare velit id nisl vehicula, et auctor tellus dictum. Maecenas rhoncus orci ac dolor rhoncus tincidunt. Sed venenatis ac sapien at aliquet. Sed non nunc varius, eleifend lectus sit amet, euismod nibh. Quisque suscipit, orci eu molestie ullamcorper, nulla mi elementum lectus, a faucibus tortor massa eu turpis. Fusce sollicitudin, massa eu feugiat bibendum, magna dui dictum ante, vitae dictum eros tortor sit amet nulla. Pellentesque consequat sit amet nunc id pellentesque. Praesent in libero vel justo facilisis tincidunt a vitae mi. Cras fermentum urna a orci tincidunt, vitae sollicitudin nulla euismod. Pellentesque ac leo ullamcorper, suscipit elit sed, scelerisque odio. Sed sodales dolor quis ornare pretium. Donec ut viverra nisi, in laoreet ex. Praesent ultrices augue sit amet nunc vehicula, et rutrum metus sagittis. Sed aliquam mattis dolor, a cursus risus posuere vel. Suspendisse condimentum tellus dui, quis vehicula lacus tempus in. Vestibulum ac orci nec purus faucibus imperdiet. Suspendisse fringilla facilisis mauris non congue. In a ante quis velit ultricies varius a in justo. Donec tincidunt auctor egestas. Donec et felis nec nisi pharetra viverra eu ac metus. Cras euismod nibh eget nibh mollis efficitur sed pulvinar leo. Aenean vel eros tristique, molestie urna sit amet, mollis urna.";
// var author1 = "Peter Schiff";
// var likes1 = 110;
// var	dislikes1 = 12;
// var topics1 = ["Philosophical", "big picture", "bitcoin"];
// 
// var article1 = new Article(title1, tldr1, date1, content1, author1, likes1, dislikes1, topics1);
// console.log(article1);
// console.log(article1.title);
// console.log(article1.printMe);
// console.log(article1.printMe());
// console.log(article1.printMeElegant());

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function Article(title, tldr, content, date, author, level){
	this.title=title;
	this.tldr=tldr;
	this.content=content;
	this.date=date;
	this.author=author;
	this.level=level;
	this.likes=getRndInteger(2500, 5000);
	this.dislikes=getRndInteger(100, 500);
	this.views=getRndInteger(5000, 10000);
	this.updateIncrementLikes = function() {
		this.likes+=1;
	};
	
}

var myArticle = new Article(
	"Bitcoin, the World's Reserve Currency?",
	["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere.",
	"Integer eget luctus ex. Nam fermentum quis quam vel sagittis.", 
	"Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem.",
	"Etiam eu lacus vitae felis dignissim tincidunt nec nec sem."],
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere, dignissim turpis eget, feugiat nulla. In hac habitasse platea dictumst. Etiam tincidunt vitae nisl congue commodo. Integer tincidunt dolor nisi, ac sollicitudin metus rutrum et. <br><br>"+
	"Ut arcu magna, ultricies ut libero ut, posuere condimentum lorem. Integer eget luctus ex. Nam fermentum quis quam vel sagittis. Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem. Etiam eu lacus vitae felis dignissim tincidunt nec nec sem. Vivamus vitae varius ligula. Proin in malesuada ex. In mi mi, dictum at orci in, mattis imperdiet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br><br>"+
	"Vestibulum lorem nibh, laoreet interdum magna pretium, laoreet faucibus mauris. Nam suscipit quam ut velit dapibus mollis. In a nunc consequat nulla sollicitudin luctus vitae a justo. Morbi id turpis dapibus, aliquam ligula in, dictum lacus. Praesent id mattis mi. Donec facilisis tristique mi eget pulvinar. Phasellus viverra vehicula ligula, nec imperdiet massa sagittis in. Sed eu leo tempor tortor elementum rutrum at at augue. Suspendisse potenti. Ut quis libero ullamcorper, consequat mauris non, egestas velit. Phasellus vitae pretium mi, non feugiat eros. Vestibulum hendrerit turpis gravida accumsan ullamcorper. Aliquam erat volutpat. Maecenas ornare velit id nisl vehicula, et auctor tellus dictum. Maecenas rhoncus orci ac dolor rhoncus tincidunt. Sed venenatis ac sapien at aliquet. Sed non nunc varius, eleifend lectus sit amet, euismod nibh. Quisque suscipit, orci eu molestie ullamcorper, nulla mi elementum lectus, a faucibus tortor massa eu turpis. <br><br>"+
	"Fusce sollicitudin, massa eu feugiat bibendum, magna dui dictum ante, vitae dictum eros tortor sit amet nulla. Pellentesque consequat sit amet nunc id pellentesque. Praesent in libero vel justo facilisis tincidunt a vitae mi. Cras fermentum urna a orci tincidunt, vitae sollicitudin nulla euismod. Pellentesque ac leo ullamcorper, suscipit elit sed, scelerisque odio. Sed sodales dolor quis ornare pretium. Donec ut viverra nisi, in laoreet ex. Praesent ultrices augue sit amet nunc vehicula, et rutrum metus sagittis. Sed aliquam mattis dolor, a cursus risus posuere vel. <br><br>"+
	"Suspendisse condimentum tellus dui, quis vehicula lacus tempus in. Vestibulum ac orci nec purus faucibus imperdiet. Suspendisse fringilla facilisis mauris non congue. In a ante quis velit ultricies varius a in justo. Donec tincidunt auctor egestas. Donec et felis nec nisi pharetra viverra eu ac metus. Cras euismod nibh eget nibh mollis efficitur sed pulvinar leo. <br><br>"+
	"Aenean vel eros tristique, molestie urna sit amet, mollis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere, dignissim turpis eget, feugiat nulla. In hac habitasse platea dictumst. Etiam tincidunt vitae nisl congue commodo. Integer tincidunt dolor nisi, ac sollicitudin metus rutrum et. Ut arcu magna, ultricies ut libero ut, posuere condimentum lorem. Integer eget luctus ex. Nam fermentum quis quam vel sagittis. Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem. Etiam eu lacus vitae felis dignissim tincidunt nec nec sem. <br><br>"+
	"Vivamus vitae varius ligula. Proin in malesuada ex. In mi mi, dictum at orci in, mattis imperdiet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lorem nibh, laoreet interdum magna pretium, laoreet faucibus mauris. Nam suscipit quam ut velit dapibus mollis. In a nunc consequat nulla sollicitudin luctus vitae a justo. Morbi id turpis dapibus, aliquam ligula in, dictum lacus. Praesent id mattis mi. Donec facilisis tristique mi eget pulvinar. Phasellus viverra vehicula ligula, nec imperdiet massa sagittis in. Sed eu leo tempor tortor elementum rutrum at at augue. <br><br>"+
	"Suspendisse potenti. Ut quis libero ullamcorper, consequat mauris non, egestas velit. Phasellus vitae pretium mi, non feugiat eros. Vestibulum hendrerit turpis gravida accumsan ullamcorper. Aliquam erat volutpat. Maecenas ornare velit id nisl vehicula, et auctor tellus dictum. Maecenas rhoncus orci ac dolor rhoncus tincidunt. Sed venenatis ac sapien at aliquet. Sed non nunc varius, eleifend lectus sit amet, euismod nibh. Quisque suscipit, orci eu molestie ullamcorper, nulla mi elementum lectus, a faucibus tortor massa eu turpis. Fusce sollicitudin, massa eu feugiat bibendum, magna dui dictum ante, vitae dictum eros tortor sit amet nulla. <br><br>"+
	"Pellentesque consequat sit amet nunc id pellentesque. Praesent in libero vel justo facilisis tincidunt a vitae mi. Cras fermentum urna a orci tincidunt, vitae sollicitudin nulla euismod. Pellentesque ac leo ullamcorper, suscipit elit sed, scelerisque odio. Sed sodales dolor quis ornare pretium. Donec ut viverra nisi, in laoreet ex. Praesent ultrices augue sit amet nunc vehicula, et rutrum metus sagittis. Sed aliquam mattis dolor, a cursus risus posuere vel. Suspendisse condimentum tellus dui, quis vehicula lacus tempus in. Vestibulum ac orci nec purus faucibus imperdiet. Suspendisse fringilla facilisis mauris non congue. In a ante quis velit ultricies varius a in justo. Donec tincidunt auctor egestas. Donec et felis nec nisi pharetra viverra eu ac metus. <br><br>"+
	"Cras euismod nibh eget nibh mollis efficitur sed pulvinar leo. Aenean vel eros tristique, molestie urna sit amet, mollis urna.",
	new Date().getTime(),
	"Peter Schiff",
	"Nocoiner");

document.getElementById("viewsCount").innerHTML=myArticle.views;
document.getElementById("likesCount").innerHTML=myArticle.likes;
document.getElementById("dislikesCount").innerHTML=myArticle.dislikes;
document.getElementById("title").innerHTML=myArticle.title;
document.getElementById("content").innerHTML=myArticle.content;
document.getElementById("author").innerHTML=myArticle.author;
document.getElementById("level").innerHTML=myArticle.level;
document.getElementById("date").innerHTML=myArticle.date;

function updateLikesCount(){
	console.log(myArticle);
	myArticle.updateIncrementLikes();
	console.log(myArticle);
	document.getElementById("likesCount").innerHTML=myArticle.likes;
}