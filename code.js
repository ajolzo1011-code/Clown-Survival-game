

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cd30063e-5089-4f91-8bc6-1aa9888cf1dd","5b17c9d4-7a4f-4421-9a4b-7c0032b0a552","61cbcde7-bc7b-4f7f-8d0e-328464f9589d","a6692f2f-c543-4992-86fd-e3846800d207","ec4bbcf3-cfbd-4890-9e56-00d5a957d95f","3936c99a-599b-46d0-935e-475712185f49","8c78a4c6-76a2-4201-8667-837241352244","3e938e89-59f6-4265-8453-cd432f5529ad","fcaf59aa-b639-48de-b823-909077d7a839","00611399-799f-4097-83b1-995b09c768a1"],"propsByKey":{"cd30063e-5089-4f91-8bc6-1aa9888cf1dd":{"name":"cop.png_1","sourceUrl":null,"frameSize":{"x":33,"y":30},"frameCount":2,"looping":true,"frameDelay":15,"version":"jH9SURnTAUVHsYjA8tymUdD8n_pFau0L","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":33,"y":60},"rootRelativePath":"assets/cd30063e-5089-4f91-8bc6-1aa9888cf1dd.png"},"5b17c9d4-7a4f-4421-9a4b-7c0032b0a552":{"name":"laser","sourceUrl":null,"frameSize":{"x":86,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"BnvYvW9qdkU8N.rEh3lrM1oFGtHNxhdE","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":16},"rootRelativePath":"assets/5b17c9d4-7a4f-4421-9a4b-7c0032b0a552.png"},"61cbcde7-bc7b-4f7f-8d0e-328464f9589d":{"name":"rsz_ddddd.png_1","sourceUrl":null,"frameSize":{"x":126,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"hgp7zUSryZzL0CSOzroZ6AYCQ95rl_JG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":105},"rootRelativePath":"assets/61cbcde7-bc7b-4f7f-8d0e-328464f9589d.png"},"a6692f2f-c543-4992-86fd-e3846800d207":{"name":"bronze_1","sourceUrl":null,"frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":2,"version":"dUJoO_q1jQkDmgjFqc5UqpJWoJY8.rjf","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":258},"rootRelativePath":"assets/a6692f2f-c543-4992-86fd-e3846800d207.png"},"ec4bbcf3-cfbd-4890-9e56-00d5a957d95f":{"name":"walkingclown","sourceUrl":null,"frameSize":{"x":48,"y":112},"frameCount":4,"looping":true,"frameDelay":4,"version":"tozdsYnHgziQFAI_V7zq9rpoQGMmVi.5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":224},"rootRelativePath":"assets/ec4bbcf3-cfbd-4890-9e56-00d5a957d95f.png"},"3936c99a-599b-46d0-935e-475712185f49":{"name":"walkingclown_copy_1","sourceUrl":null,"frameSize":{"x":48,"y":112},"frameCount":4,"looping":true,"frameDelay":4,"version":"zx8w6rT.xppcZ9KzquAf9ASCrFta0DwS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":224},"rootRelativePath":"assets/3936c99a-599b-46d0-935e-475712185f49.png"},"8c78a4c6-76a2-4201-8667-837241352244":{"name":"jumpingclown","sourceUrl":null,"frameSize":{"x":44,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"2bM7hTvaJwhZ_kXJfTUKa47hbEjXLh4d","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":97},"rootRelativePath":"assets/8c78a4c6-76a2-4201-8667-837241352244.png"},"3e938e89-59f6-4265-8453-cd432f5529ad":{"name":"jumpingclown_copy_1","sourceUrl":null,"frameSize":{"x":44,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"Pwup0GEXLwoNFO.vP.6qoJ0IyQfCFaTH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":97},"rootRelativePath":"assets/3e938e89-59f6-4265-8453-cd432f5529ad.png"},"fcaf59aa-b639-48de-b823-909077d7a839":{"name":"clown.png_1","sourceUrl":null,"frameSize":{"x":97,"y":78},"frameCount":14,"looping":false,"frameDelay":5,"version":"kjCEkFmQJH0qyq9QzPEP9EKRD7n65rOW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":291,"y":390},"rootRelativePath":"assets/fcaf59aa-b639-48de-b823-909077d7a839.png"},"00611399-799f-4097-83b1-995b09c768a1":{"name":"hit","sourceUrl":null,"frameSize":{"x":65,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"K6WenYm5hPPJ_EjlDEbJs2tmMoVCdG7e","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":69},"rootRelativePath":"assets/00611399-799f-4097-83b1-995b09c768a1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backround = createSprite(200, 200);
backround.setAnimation("rsz_ddddd.png_1");
var laser = createSprite(315, 315);
laser.setAnimation("laser");
var coin = createSprite(200, 0);
coin.setAnimation("bronze_1");
var clown = createSprite(50, 330);
clown.setAnimation("walkingclown");
var cop = createSprite(340, 340);
cop.setAnimation("cop.png_1");
var dead = createSprite(200, 300);
dead.setAnimation("laser");
dead.visible = false;
dead.scale = 2.3;
cop.scale = 4;
coin.scale = 0.7;
laser.scale = 0.4;
laser.velocityX = -5;
clown.scale = 1.3;
backround.scale = 4;
coin.velocityY = 5;
var balloons = 0;
var health = 5;
coin.setCollider("circle");
laser.setCollider("rectangle", 0, -5, 100, 25, 0);
function draw() {
  background("white");
  if (clown.isTouching(coin)) {
    coin.x = randomNumber(0, 250);
    coin.y = 50;
    balloons = balloons + 1;
  }
  if (coin.y >= 350) {
    coin.x = randomNumber(0, 250);
    coin.y = 50;
  }
  if (laser.x < 0) {
    laser.x = 315;
  }
  if (laser.isTouching(clown)) {
    clown.setAnimation("hit");
    laser.x = 315;
    health = health - 1;
  }
  if (keyWentDown("up")) {
    clown.velocityY = -5;
    clown.setAnimation("jumpingclown");
  }
  if ((clown.y) <= 175) {
    clown.velocityY = 5;
  }
  if (clown.velocityY == 5) {
    if (clown.y >= 330) {
      clown.velocityY = 0;
      clown.setAnimation("walkingclown");
    }
  }
  if (keyDown("right")) {
    clown.x = clown.x + 5;
  }
  if (keyDown("right")) {
    clown.setAnimation("walkingclown");
  }
  if (keyDown("left")) {
    clown.x = clown.x - 5;
    clown.setAnimation("walkingclown_copy_1");
  }
  if (clown.y < 330) {
    if (keyDown("right")) {
      clown.setAnimation("jumpingclown");
    }
    if (keyDown("left")) {
      clown.setAnimation("jumpingclown_copy_1");
    }
  }
  drawSprites();
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  textSize(20);
  text("coins", 280, 50);
  text (balloons, 360, 50);
  if (health <= 0) {
    dead.setAnimation("clown.png_1");
    dead.visible = true;
    clown.visible = false;
    cop.visible = false;
    backround.visible = false;
    laser.visible = false;
    coin.scale = false;
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 200);
    drawSprites();
    playSound("https://www.youtube.com/watch?v=dQzGkhd4YXw", true);
  }
  if (balloons >= 15) {
    background("black");
    fill("green");
    textSize(50);
    text("You Win!" , 40, 200);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
