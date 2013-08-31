(
	function(a)
	{
		a.tiny=a.tiny||{};
		a.tiny.carousel={options:{start:1,display:1,axis:"x",controls:true,pager:false,interval:false,intervaltime:3000,rewind:false,animation:true,duration:1000,callback:null}};
		a.fn.tinycarousel_start=function(){a(this).data("tcl").start()};
		a.fn.tinycarousel_stop=function(){a(this).data("tcl").stop()};
		a.fn.tinycarousel_move=function(c){
			a(this).data("tcl").move(c-1,true)
		};
		function b(q,e)
		{
			var i=this,
			h=a(".viewport:first",q),
			g=a(".overview:first",q),
			k=g.children(),
			f=a(".next:first",q),
			d=a(".prev:first",q),
			l=a(".pager:first",q),
			w=0,
			u=0,
			p=0,
			j=undefined,
			o=false,
			n=true,
			s=e.axis==="x";
			
			function m(){
				if(e.controls){
					//d.toggleClass("disableprev",p<=0);f.toggleClass("disablenext",!(p+1<u));
					if(p<=0) $('#prev').attr('src','img/prev-disabled.png');
					else $('#prev').attr('src','img/prev.png');
					if(!(p+3<u)) $('#next').attr('src','img/next-disabled.png');	
					else $('#next').attr('src','img/next.png');
					
				}
				if(e.pager){
					var x=a(".pagenum",l);x.removeClass("active");
					a(x[p]).addClass("active")
				}
			}
			function v(x){
				if(a(this).hasClass("pagenum"))
				{
					i.move(parseInt(this.rel,10),true)
				}
				return false
			}
			function t(){
				if(e.interval&&!o)
				{
					clearTimeout(j);
					j=setTimeout(function(){p=p+1===u?-1:p;n=p+1===u?false:p===0?true:n;i.move(n?1:-1)},e.intervaltime)
				}
			}
			function r(){
				if(e.controls&&d.length>0&&f.length>0){
					d.click(function(){
									i.move(-1);
									return false
					});
					f.click(function(){
									i.move(1);
									return false
					})
				}
				if(e.interval){
					q.hover(i.stop,i.start)
				}
				if(e.pager&&l.length>0){
					a("a",l).click(v)
				}
			}
			this.stop=function(){clearTimeout(j);o=true};
			this.start=function(){o=false;t()};
			this.move=function(y,z){
										p=z?y:p+=y;
										w=a(k[0]).outerWidth(true)
										var x={};
										x[s?"left":"top"]=-(p*(w*e.display));
										if(p<0)
										{
											p=0;
											x[s?"left":"top"]=0;	
										}
										if(!(p+2<u))
										{
											p=u-3;
											x[s?"left":"top"]=-(p*(w*e.display));
										}
										g.animate(x,
											{
												queue:false,duration:e.animation?e.duration:0,complete:function()
													{
														if(typeof e.callback==="function")
														{
															e.callback.call(this,k[p],p)
														}
													}
											
											}
										);
										m();
										t();
								};
			function c(){
				w=a(k[0]).outerWidth(true)
				var x = 0
				u=Math.max(1,Math.ceil(k.length/e.display)-x);
				p=Math.min(u,Math.max(1,e.start))-2;
				g.css(s?"width":"height",((w*k.length)/s?$(window).width():$(window).height())*100);
				i.move(1);
				r();
				return i
			}
			return c()
		}
		a.fn.tinycarousel=function(d){
			var c=a.extend({},a.tiny.carousel.options,d);
			this.each(function(){a(this).data("tcl",new b(a(this),c))});
			return this
		}
	}
(jQuery));