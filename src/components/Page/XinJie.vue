<!-- 这个页面是主页面 -->

<template>
	<div>
		
	<div class="main_body">
	</div>	

	
	<!-- #2 介绍 -->
<!-- 	<div style="height:40px"></div> -->
	<!-- <img src="../../assets/孔子1.jpg"></img> -->
<!-- 	<el-container >
	  <el-aside width="650px" >
		  <h1>论语·学而篇</h1>
		  子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”
		  
		  　　有子曰：“其为人也孝弟，而好犯上者，鲜矣；不好犯上而好作乱者，未之有也。君子务本，本立而道生。孝弟也者，其为仁之本与！”
		  
		  　　子曰：“巧言令色，鲜矣仁！”
		  
		  　　曾子曰：“吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？”
		  
		  　　子曰：“道千乘之国，敬事而信，节用而爱人，使民以时。”
		  
		  　　子曰：“弟子入则孝，出则弟，谨而信，泛爱众，而亲仁，行有余力，则以学文。”
		  
		  　　子夏曰：“贤贤易色；事父母，能竭其力；事君，能致其身；与朋友交，言而有信。虽曰未学，吾必谓之学矣。”
		  
		  　　子曰：“君子不重则不威，学则不固。主忠信，无友不如己者，过，则勿惮改。”
		  
		  　　曾子曰：“慎终追远，民德归厚矣。”
		  
		  　　子禽问于子贡曰：“夫子至于是邦也，必闻其政，求之与，抑与之与？”子贡曰：“夫子温、良、恭、俭、让以得之。夫子之求之也，其诸异乎人之求之与？”
		  
		  　　子曰：“父在，观其志；父没，观其行；三年无改于父之道，可谓孝矣。”
		  
		  　　有子曰：“礼之用，和为贵。先王之道，斯为美。小大由之，有所不行。知和而和，不以礼节之，亦不可行也。”
		  
		  　　有子曰：“信近于义，言可复也。恭近于礼，远耻辱也。因不失其亲，亦可宗也。”
		  
		  　　子曰：“君子食无求饱，居无求安，敏于事而慎于言，就有道而正焉，可谓好学也已。”
		  
		  　　子贡曰：“贫而无谄，富而无骄，何如？”子曰：“可也。未若贫而乐，富而好礼者也。”子贡曰：“《诗》云：‘如切如磋，如琢如磨’，其斯之谓与？”子曰：“赐也，始可与言《诗》已矣，告诸往而知来者。”
		  
		  　　子曰：“不患人之不己知，患不知人也。”
		  
	  </el-aside>
	  <el-main style="text-align: center;">
		  <img src="../../assets/孔子1.jpg" height=300></img>
			
	  </el-main>
	</el-container>
	 -->
	 
	<!-- #3 转页面 -->
	<div style="height:150px" class="top"></div>


	<el-button round type="primary" @click="prevSlide">上一篇</el-button>
	<el-button round type="warning" @click="nextSlide">下一篇</el-button>	  
		  
	<!-- #1 图片 -->
	<!-- <div style="height:300px"></div> -->
	<el-carousel arrow="always" 
		indicator-position="none"
		:height="carouselHeight" :autoplay="false"
		ref="carousel">
		
	  <el-carousel-item 
		v-for="item in carousel" :key="item.idx">
		<!-- <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease"> -->
		
		<el-main class="thirdBlock">
			<el-row>
				<h1 style="font-size:50px;">{{item.title}}</h1>
			</el-row>
			<el-row>
				<h1 > {{item.zuozhe}}</h1>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="22" :offset="1">
				  <!-- <p style='font-size:30px; color:#000000;
				  text-align:left; font-weight:bold;
				  font-family:"宋体"' v-for="txt in item.text">
					 &nbsp;&nbsp;{{txt}}
				  </p> -->
				  <p v-html="item.text" style="text-align:left;
					font-size:30px;
				  "></p>
				  <!-- <p v-html="item.text2" style="text-align:left;
					font-size:20px;"></p> -->
				  
			  </el-col>
			</el-row>
			
			
		</el-main>
		
	
		<!-- </touch-ripple> -->
		

	  </el-carousel-item>
	</el-carousel>
	
	<el-button round type="primary" @click="prevSlide">上一篇</el-button>
	<el-button round type="warning" @click="nextSlide">下一篇</el-button>	  
	


<!-- 	<el-main>
		<el-row>
			<video height=380; :src='require("../../assets/作品/惠子相梁何思炘.mp4")' controls="controls"></video>
		</el-row>
		<el-row>
			<video height=380; :src='require("../../assets/作品/道德经何思然.mp4")' controls="controls"></video>
		</el-row>
		<el-row>
			<audio controls :src="require('../../assets/作品/劝学严旭.mp3')"></audio>
		</el-row>
		<el-row>
			<audio controls :src="require('../../assets/作品/劝学张睿焘.mp3')"></audio>
		</el-row>
		<el-row>
			<audio controls :src="require('../../assets/作品/鱼我所欲也颜莘桐.mp3')"></audio>
		</el-row>
	</el-main>
	 -->
	
	

	</div>
</template>

<script>
	// import el-image
	
	export default {
		methods:{
			buttonRoute(e){
				// console.log(e,f)
				this.$router.push(e)
			},
			nextSlide(){
				this.$refs.carousel.next()
				// console.log(this.$refs.carousel.next())
				document.documentElement.scrollTop = 0;
				// console.log(this.$refs.carousel)
				this.callback()
			},
			prevSlide(){
				this.$refs.carousel.prev()
				document.documentElement.scrollTop = 0;
				// console.log(this.$refs.carousel)
				this.callback()
			},
			callback(){
				// console.log(this.$refs.carousel.activeIndex)
				var activeIndex = this.$refs.carousel.activeIndex
				console.log(activeIndex)
				console.log(this.carousel[0].text)
				console.log(this.carousel[activeIndex].text)
				var len1 = (this.carousel[0].text).length
				var len2 = (this.carousel[activeIndex].text).length
				console.log(len2/len1)
				this.carouselHeight = (600.0+1400.0*(len2)/len1)+"px"
			}
		},
		computed:{
			// carouselHeight:function(){
			// 	console.log(this.$refs.carousel)
			// 	return "1300px";
			// }
		},
		data(){
		  return {
			  index: 0 ,
			  // todos
			  carouselHeight:"2000px",
			  carousel: [
				   {
				   zuozhe:"严  旭",
				   title:"中文491学习心得",
					text:"\
     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个学期，我选修了中文491。在学习这门课之前，我以为的古汉语课程大概就是印象中那些背过的“高考必考文言文”。它们是枯燥的，是索然无味的，是看到上句就能默出下句的条件反射，是不过脑子就能背出的句子翻译和注释。那么，只要多花点时间，这节课所要做的事情对我来说一定也是老生常谈。但是，在刘老师与同学们的交流中，抽象晦涩的古汉语文学变得具体又有趣。我也总结 出了自己的学习心得，是这些让我发现原来学习古汉语并不是味同嚼蜡。\
       </p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，学会归纳总结是这节课很重要的技巧，特别是汉字的结构与发展。汉字是语言的基础，也是古汉语的书面表达。经过千年的积累，每一个汉字都有自己的历史，不同的功能。所以，单凭死记硬背是不能记住所有汉字的演变，词类活用，这些功能性用法。如果没有归纳总结这些知识点，当回过头来复习的时候，看着一大段的文字，肯定是无从下手，那对古汉语的学习热情也会因此被浇灭了。这时候，每节课后的归纳总结就很重要，对之后的测验也十分有帮助。当把每一个点都用最直观的方法归纳出来，不仅是对课程内容的一个复习，对后期的学习肯定也是百利而无一害的。\
        </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其次，是从刘老师491课程很独特的“开心一刻”中得到的新体会，就是要学会在单调的学习过程里增加一点乐趣，放松自己。我发现刘老师的“开心一刻”的位置安排基本上都是在上堂课内容复习之后，本节课内容开始之前，这起到了一个承上启下的作用。如果只是一味的从头到尾，得不至休息，没有适当的劳逸结合与放松，那么人的精力有限，注意力也会逐渐涣散，从而导致什么也学不进去。但是，如果在中间插入一些关于课程内容的笑话或有趣的内容，那在紧绷的氛围与神经得到放松的同时，也丰富了知识点，这又何乐而不为呢？\
       </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 最后，也是影响我最深的一个要点就是我认为我们可以试着把教学内容融入到生活中，试着在生活中留意古汉语的出现。古汉语文学涉及面广，说起来容易，理解起来却很难，因为每个人的生活阅历不同，所以领悟程度也不一样。但是，这并不妨碍将古汉语与我们的生活联系起来。举一个我自己的例子，已经到了学期末，我对学期最开始所讲的“反切注音法”依旧印象深刻。暑假的时候，我曾在一部古装探案剧看到主人公将线索用“反切注音法”藏在一首诗中，当线索被破解，主人公在解释“反切注音法”的时候，我虽听得一头雾水，但也没特别在意，只是觉得这个完全没听过的注音方法晦涩难懂。当在课堂上听到“反切注音法”的时候，电视剧的情节一下浮现出现了。但是，当时“反切注音法”只是非常小的一个知识点，很快就过了。但是这并不妨碍我在课后对它进行研究。大致掌握了要点，又经过了课后作业的练习以后，我又把电视剧中中“反切注音法”的部分调出来看了一遍，把诗用反切注音法一个个标记出来，跟着主人公提供的思路，一步步得到了答案。虽然过程不是那么顺利，但是把它与生活中的一些事情联系起来却很有趣，反切注音法也自此在我心中留下了很深的印象。\
        </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上就是我通过这学期491所总结 出的一些最基础的心得。希望对大家有所帮助，虽然很普通，但是我也会继续把它们运用到之后的学习过程中。 \
					</p>",
					idx: 0},
					{
				   zuozhe:"王欻至",
				   title:"读《庄周梦蝶》有感",
					text:'\
<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“昔者庄周梦为胡蝶，栩栩然胡蝶也，自喻适志与！不知周也。俄然觉，则蘧蘧然周也。不知周之梦为胡蝶与，胡蝶之梦为周与？周与胡蝶，则必有分矣。此之谓物化。”1 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《庄周梦蝶》是一则著名的寓言，从开始学习古文时，我就对这篇古文中的思想十分感兴趣。结合这学期对道家思想的学习，我想把目前我对于这篇寓言的想法、思考记录下来。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“周与胡蝶，则必有分矣。”庄子和蝴蝶是两种不同的事物，两者有着不同的存在形态，有着本质上的区别。联系前文中提到的梦与觉两种状态，在庄周梦到自己变成蝴蝶的梦境中，庄周自认为是蝴蝶，从梦中醒来时，又意识到自己其实是庄周。庄子和蝴蝶之间虽然存在着形态上的区别，但由于“此之谓物化”的概念，二者之间是可以相互转化的。陈鼓应先生认为“物化”意为“万物的转化”。2人和蝴蝶虽然存在形体上的不同，但同样都是存在于世间的物体，那么是可以跨越事物形体上的差异，形成统一、融合，这就是万物之间的转化，即“物化”。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种事物之间的转化，在“梦”与“觉”的场景转化中得到了很好的体现。“不知周之梦为胡蝶与，胡蝶之梦为周与？”不知道是庄周做梦变成了蝴蝶，还是蝴蝶做梦变成了庄周。庄周、蝴蝶与梦、觉之间没有明确的对应关系。“物化”的概念和“梦”与“觉”之间的转化相辅相成，展现出庄子认为对梦和觉的界限不必过于纠结。世间万物不应该有明显的区分，我们应该保有超越划分界限的立场看待事物和问题。因为任何既定的界限都是可以超越的。如果将这一哲学理念融入到现实生活中，我们应该超越既定的、划分好的界限、立场，这对于自我认知以及如何看待其他事物有着很重要的意义。“天地与我并生，万物与我为一。”自我和世间万物是统一、共生的，但内在却有着一定的多样性和差异性。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《庄周梦蝶》以及庄子“齐物论”有关思想有着深刻的哲学含义，或许以后当我学习了更多相关知识，再次阅读《庄周梦蝶》时，会有不一样的思考和感悟。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;参考文献： \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陈鼓应：《庄子今注今译》，北京：商务印书馆，2007年。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方勇 译注:《庄子》，中华书局，2010年。 \
 </p>',
					idx: 1},
					{
				   zuozhe:"李    瑞 ",
				   title:"读《郑伯克段于鄢》有感 ",
					text:'\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本学期所学的文章中呢，《郑伯克段于鄢》是我的心头好。整篇文章的情节跌宕起伏、人物的刻画生动形象，通过短短的一篇文章就将郑庄公与其手足共叔段为了利益而不惜手足相残的残酷表现得淋漓尽致，也让读者有了一窥权力中心的明争暗斗的机会。除此之外，这篇文章还贡献了一句至今后世仍耳熟能详的名句“多行不义必自毙”。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而除了文学上的造诣之外，《郑伯克段于鄢》留给后世的还有其深刻的现实意义：在家庭生活中，该如何保持和睦，化解冲突的智慧；对子女的教育是否应该有偏袒等等。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在本文的故事中，郑伯，郑庄公，是哥哥。段，叔段，是弟弟。因为母亲姜氏在生产郑庄公时难产，险些丧命，因此就迁怒于郑庄公，还为他取了个“寤生”的乳名。郑庄公从小也深知自己不受母亲待见的事实，也处处忍让。而到后来姜氏有了共叔段后，便处处偏袒自己的小儿子，甚至向郑武公请求废除长子立共叔段为国家的接班人。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;直到郑武公去世，郑庄公即位后，姜氏仍然不加收敛，先是给共叔段要了封地，又放任共叔段四处招兵买马，积攒兵力，打算和共叔段里应外合夺取政权。后来计划没有得逞，共叔段也只能逃之夭夭，作为郑庄公母亲的姜氏和自己的儿子也走到了分崩离析的地步。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而她们的故事也为后世留下了很重要的启示：一是作为父母长辈，对待后辈不应有偏私，要让后辈觉得被公平对待，姜氏作为母亲在这一点上就是失职的；二是兄弟之间应该做到兄友弟恭，郑庄公为了权力，不惜手足相残，伤害自己的弟弟，纵使他获得了胜利，但后世对其的评价早已在文章的题目中一目了然。\
			</p>\
			',
			text2:'\
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初，郑武公娶于申，曰武姜。生庄公及共叔段。庄公寤生，惊姜氏，故名曰“寤生”，遂恶之。爱共叔段，欲立之，亟请于武公，公弗许。及庄公即位，为之请制。公曰：“制，岩邑也，虢叔死焉，佗邑唯命。”请京，使居之，谓之“京城大叔”。\
			</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;祭仲曰：“都城过百雉，国之害也。先王之制：大都，不过参国之一；中，五之一；小，九之一。今京不度，非制也，君将不堪。”公曰：“姜氏欲之，焉辟害？”对曰：“姜氏何厌之有？不如早为之所，无使滋蔓。蔓，难图也。蔓草犹不可除，况君之宠弟乎？”公曰：“多行不义，必自毙，子姑待之。”\
			</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;既而大叔命西鄙、北鄙贰于己。公子吕曰：“国不堪贰，君将若之何？欲与大叔，臣请事之；若弗与，则请除之，无生民心。”公曰：“无庸，将自及。”大叔又收贰以为己邑，至于廪延。子封曰：“可矣。厚将得众。”公曰：“不义不昵，厚将崩。”\
			</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大叔完聚，缮甲兵，具卒乘，将袭郑。夫人将启之。公闻其期，曰：“可矣！”命子封帅车二百乘以伐京。京叛大叔段。段入于鄢“。公伐诸鄢。五月辛丑，大叔出奔共。\
			</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;书曰：“郑伯克段于鄢。”段不弟，故不言弟；如二君，故曰克；称郑伯，讥失教也；谓之郑志。不言出奔，难之也。\
			</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遂置姜氏于城颍，而誓之曰：“不及黄泉，无相见也。”既而悔之。\
			</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;颍考叔为颍谷封人，闻之，有献于公。公赐之食。食舍肉。公问之，对曰：“小人有母，皆尝小人之食矣，未尝君之羹。请以遗之。”公曰：“尔有母遗，繄我独无！”颍考叔曰：“敢问何谓也？”公语之故，且告之悔。对曰：“君何患焉？若阙地及泉，隧而相见，其谁曰不然？”公从之。公入而赋：“大隧之中，其乐也融融！”姜出而赋：“大隧之外，其乐也洩洩！”遂为母子如初。\
			</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;君子曰：“颍考叔，纯孝也。爱其母，施及庄公。《诗》曰：‘孝子不匮，永锡尔类。’其是之谓乎？”\
				</p>',
				idx: 2},
				{
			   zuozhe:"孫皓天",
			   title:"芻犬賦",
				text:"\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若夫殖養禽畜，其數之盛，種類之繁，洋洋⼤觀也。然芻⽝者，迥異別類焉，何哉︖曰：旁 類禽畜，馴養於民，匪⼰願也︔至於芻⽝，馴養於⼈⽽⾃得也。  \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昔在上古，民者，尚茹⽑也，鑿穴⽽居，環於篝以餐。餘骸骨，不得食，遂棄之於野。⽝ 者，以為餚也。眾⽝徘徊，觀之嗅之，尤懼前。有⽝中膽壯者，克⼰戰兢，緩步前驅以近 之，⼈弗備，徇銜以遁之。⼈弗追，喜得「珍饈」，匿於暗⽽獨享也。旁⽝乃後皆效，雖初 尚疑懼，⾒⼈弗欲傷⼰，故膽漸壯。俄⽽與⼈漸熟，出入⼈居仍無礙，宛若⾃窩也。更有親 ⼈近⼈者，相親相暱，相伴相嬉，其樂融融也。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初視芻⽝，⼈尤戒之，謂其若豺狼無異也。蓋後悉其無傷⼈之意，唯羨骸骨⽿，任其銜食剩 骨⽽不涉。次漸熟，剩骨⽽群⽝來窺，投之。既久，凡逢餘食，亦投之矣。故其⾒⼈，如類 親朋也，亢奮之，勁躍之，追隨之，尾搖甚烈！誠近⼈有勝同類也。  \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;既與⼈熟，亦不相害，遂弗反⽝群⽽隨居於⼈也。矧⽝⽿聰嗅敏，觀有者侵入領地⽽狺狺吠 之，察⾶禽⾛獸之跡⽽盡⼒逐之，⼈⼤喜，曰：可堪⼤⽤哉！  \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乃為家奴，監⾨護院，巡獸獵物，無所不為也。有好事者曰：忠者，⽝也。兢兢業業，守夜 不怠，勤也︔⼀世伴主，顛沛不棄，忠也︔主難護主，臨危⾒節，勇也。雖後世有⾔，記之若「⽝⾺之勞」，此之謂也。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然至今時，逢論⽝，多賤之鄙之，嘲之諷之。涉⽝詞彙，多非善⾔。遂⼤惑：⽝者忠勇，何以漸惡邪 ！ \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;究其因，無他：⽝之德，忠主也，⽝之惡，亦忠主也。若無忠勇勤勉之德，惡或弗存矣。以主為天，⽽不知有道，以主為地，⽽不識有正，唯主是從，⽽不知有⼰。主顯則威，主頹則萎，主善則善，主惡則毀。若失主，則進之「喪家之⽝」也，惶惶⽽不知所措也。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;世⼈多據⼰⾒，蓋無⼰⾒者，非常⼈也，易為奴才也。然奴才者，終異於奴隸也——為奴隸者，迫也，奴才者，⾃⽢也。受困枷鎖者，奴隸也︔無枷鎖⽽⾃⽢為奴者，奴才也。奴隸尚知為⼰為⼈，奴才⾃墮於鷹⽝也～急從主令，狂吠傷⼈，唯恐怠慢，故為奴隸者，可憫也， 為奴才者，實可鄙也。 \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;論及芻⽝，⽢為奴畜⽽供⼈役使，以得剩餐餘骨，猶類奴才也。故余有⾔：⼈所鄙者，非⽝也，奴才也！⼈當獨為⼰主，非附旁者為奴，讀史者豈⾔弗為戒哉！ \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;為奴才者尚知⼰⾏卑鄙幾何，⽅識羞恥也。然近聞有者成奴才以為耀⽿。狄酋害民，猶⾃為樂⽿，歌頌⿎吹之聲不絕⽿，⾃謂為奴才實感激涕零，光宗耀祖，兒孫萌輝之⼤業，噫 ！世間奇異怪誕之事，何其多也！ \
</p>",
				idx: 3},
				
				{
			   zuozhe:"王正",
			   title:"儒家如何成为中国思想的核心",
				text:'\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我认为是儒家思想奠定了中国思想的基础。儒家是百家争鸣中的突出流派，但由于春秋战国是一个礼崩乐坏的社会，而儒家强调以礼治国，所以在春秋战国时期并不被重视。但到了汉代，董仲舒推行 "罢黜百家，独尊儒术 "的原则。儒家思想被正式承认，五经奠定了儒家思想的理论基础，最终使中国的封建社会被儒家思想垄断了几千年。这种垄断逐渐从朝廷延伸到民间，使人们逐渐接受儒家思想为中国思想的基础。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;儒家思想被广泛接受的原因之一是 "仁、义、礼、智、信 "的伦理道德，这些也被作为中国人的传统美德加以提倡。尤其是礼和仁，为儒家的统治思想奠定了基础。首先，儒家的 "礼 "从统治阶级到平民百姓都适用，他规定每个人都要在自己应有的角色下发挥自己的作用，"君为君纲，父为父纲，子为子纲"。并引申为忠孝，这也是统治阶级宣扬儒家思想的原因之一。另一方面，"仁 "是儒家思想的另一个重点，它主张尊重他人，相互帮助，相互关爱。孟子将 "仁 "延伸到政治上，形成了 "仁政"，以王道治国，反对霸权统治，从而改善民生，加强灌输，使人们能够安居乐业。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除此之外，还有儒家思想和统治阶级的相互结合，这有助于统治阶级维持皇权的稳定，使人民相信皇权是为人民服务的。反过来，统治阶级也帮助儒家宣传其思想，限制其他思想流派的思想。例如，从唐朝到明朝，科举制度发生了巨大的变化。在唐朝，科举制度分为许多科目，以帮助国家选拔人才，但在明朝，只考八股文，而且考题选自儒家的四书五经。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;儒家思想经过与封建王朝长达千年的合作与发展，最终为儒家思想成为中国思想奠定了基础，限制了其他思想流派，垄断了朝廷官员。正如在中国几千年的封建社会中，统治王朝发生了变化，不变的是儒家思想在朝廷中的地位。\
</p>',
				idx: 4},
				
				{
			   zuozhe:"范煜",
			   title:"孔子的仁爱思想探究",
				text:'\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孔子作为儒家的创始人和代表人物，对于儒家的发展和当前的文化思想有着深远的影响。而他的仁爱思想也贯穿始终，给了我们很多的启发。在孔子看来，爱人是仁的基本要求。《说文》解释：“仁，亲也，从人从二”。亲，爱也。从人从二，说明二个人才能讲“仁”，也就是人与人之间互相关爱。所以，当孔子的学生樊迟向孔子请教什么是“仁”时，孔子回答说：“爱人”。所谓“仁”，就是仁爱，就是发自内心地去爱人，这是仁最基本的要求。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，孔子所讲的“仁爱”到底是什么？\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从《论语》中，我们可以看到，孔子曾说过：“泛爱众，而亲仁。”也就是说，只有爱他人，才能亲近、靠近“仁”。这里的“他人”在我看来，包含众多。比如我们的亲人，我们的朋友。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱人先从爱自己身边的亲人开始，也就是对父母、兄弟、子女以及其他亲人的爱，这是由血缘亲情决定的，这是也是人的本能。如果连自己的亲人都不爱，就不必谈爱别人了。另外，一个人会有多种多样的关系。所以，我们还要爱我们遇到的每一个人，我们的国家和社会。虽然这种爱有差别，但只有心怀大爱，才是真正的“仁”。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过这样的思想主张，我们可以看到，孔子对于后人的影响其实一直存在。不管是孟子还是荀子，虽然在对“仁”的理解上有所差异，但都能看见孔子的影子。所以，这也可以说是儒家“仁”的初始。\
</p>',
				idx: 5},
				
				{
			   zuozhe:"潘雪茗",
			   title:"兼爱与外群体歧视",
				text:'\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;墨子在《兼爱上》中提出了人与人之间不相爱是很多祸乱发生的原因。我们通过常识判断，人与人之间不产生矛盾不发生冲突是不可能的情况，墨子所描述的“若使天下兼相爱”只是他理想中的情况。现实中，很多时候人们互相伤害是出于利益的考量，比如说国家与国家之间争夺资源和土地，强盗和小偷去抢劫与偷窃也是为了获取财物，君臣之间争夺权力，父子、兄弟之间争抢家产。除开利益影响之外，人们就可以和平相处了吗？心理学告诉我们，就算没有利益纠葛，让人与人之间产生对立也是非常简单的。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;心理学家Tajfel在他的社会认同理论中说明，当把人们分成两组，人们就会自然的做出有害于他组的行为，尽管分组原因是无关紧要的小事，并且事实上分组的方法是完全随机的。这样的现象与人的自我身份认同有关。研究表明，偏爱自己所属的群体可以提高我们的自尊心。这是因为当一个人的个人身份和社会身份相关联度较高时，人更加需要归属感和被认同感，而做出利于内群体并损害外群体的行为可以让自己所属的群体变得更好。而当我们知道自己所属的群体更好时，我们的自尊心得以进一步提高。因此，仅仅是将人们随机分为两组就足以产生群体间的敌意，那么墨子所倡导的“天下人兼相爱”可能只是一种美好愿望。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;令人高兴的是，心理学家也提出了减小这种群体间敌意的方法：更多的强调合作与公平，而不是竞争。尽管现在还存在对外群体的歧视的贬低，由于现代社会流动性大，事实上人受到内群体影响会更小。我认为这样的思考对于我们当下这个时代有着很好的启示，希望我们可以一步步向墨子所描述的那种理想的文明社会迈进。\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reference\
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taijfel, H. (1970). Experiments in intergroup discrimination. Scientific American. 223(5), \
</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;96–102. doi:10.1038/scientificamerican1170-96\
</p>',
				idx: 6},
			  ],
			  
			  backgroundImage: require("../../assets/梅花.jpg"),
			  url: require("../../assets/孔子1.jpg"),
			  srcList: [
				  require("../../assets/孔子1.jpg")
			  ]
		  }
		},
	}	
</script>

<style scoped>
	.fourthBlock{
		height:100%;
		background-color:#99A9BF;
	}
	
	.main_body{
		background-repeat:no-repeat;
		background-size:100% 100%;
		width: 100%;
		height:100%;
		/* background-image: url(../../assets/高山流水.jpg); */
		/* background-image: url(../../assets/仙鹤.jpg); */
		/* background-image: url(../../assets/长城2.jpg); */
		/* background-image: url(../../assets/GuiLin.jpg); */
		/* background-image: url(../../assets/云淡风轻.png); */
		background-image: url(../../assets/shan2.webp.jpg);
		opacity:0.5;
		/*云淡风轻.png*/
		position:fixed;
		z-index: -1;
	}
	
	.el-button{
		position:relative;
		opacity:1.0;
		height:80px;
		width:150px;
		font-size:30px;
		z-index:100;
	}
	
	.el-carousel__item{
		  /* height: 500%; */
	} 
	
	.el-carousel__container el-carousel__arrow{
		width:500px;
		height:500px;
	}
	.el-carousel__arrow el-carousel__arrow--left{
		width:500px;
		height:500px;
	}
	
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 18px;
	  /* opacity: 0.75; */
	  line-height: 300px;
	  margin: 0;
	}
	
	.el-carousel__item{
		/* background-color:rgba(255,255,255,0.3); */
		/* background-image: url(../../assets/长城.jpg); */
		/* background-image: url(../../assets/梅花.jpg); */
	}
	
	.el-carousel__item:nth-child(2n) {
	  /* background-color: #ffffff; */
	  
	}
	
	.el-carousel__item:nth-child(2n+1) {
	  /* background-color: #ffffff; */
	  /* background-image: url(../../assets/梅花.jpg); */
	}
	
	.el-carousel__indicators--outside button{
		color:#000000!important;
	}
	.thirdBlock{
		/* height:520px; */
		/* width:50%; */
		/* text-align: right; */
		/* background-size:500px 350px; */
		/* background-image:url(../../assets/桃花.jpg); */
	}
	
	.el-main{
		/* position:relative; */
	}
	
</style>
