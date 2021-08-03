function navbar(){

    return `
    <div id="container">

    <div class="sub">
        <h3><a href="/home.html">Home</a></h3>
    </div>
    <div class="sub">
        <input type="text" id="query" style="width: 520px; height: 27px;">
        <button id="btn" style="margin-left: 0px;"><img src="https://img.icons8.com/material-two-tone/24/000000/search.png"/></button>
        
    </div>
    <div class="sub">
        <h3 ><a href="/recipeoftheday.html">recipe of the day</a></h3>
        <h3><a href="/latestrecipe.html">Latest recipe</a></h3>
        <h3><a href="#">register</a></h3>
        <h3><a href="#">Login</a></h3>
    </div>

</div>
<div id="data"></div>
    `
}

export default navbar