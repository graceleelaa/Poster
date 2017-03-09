//creates the balls and sets their position as well as the random timer for each
private void spawnBalls1() {

    Rectangle ball1 = new Rectangle();
    ball1.x = MathUtils.random(639, 641);
    ball1.y = 720;
    ball1.width = 32;
    ball1.height = 32;
    balls1.add(ball1);
    lastDropTime = TimeUtils.nanoTime();

}

private void spawnBalls2() {

    Rectangle ball2 = new Rectangle();
    ball2.x = 0;
    ball2.y = MathUtils.random(359, 361);
    ball2.width = 32;
    ball2.height = 32;
    balls2.add(ball2);
    lastDropTime = TimeUtils.nanoTime();
}

private void spawnBalls3() {

    Rectangle ball3 = new Rectangle();
    ball3.x = MathUtils.random(639, 641);
    ball3.y = 0;
    ball3.width = 32;
    ball3.height = 32;
    balls3.add(ball3);
    lastDropTime = TimeUtils.nanoTime();
}

private void spawnBalls4() {

    Rectangle ball4 = new Rectangle();
    ball4.x = 1280;
    ball4.y = MathUtils.random(359, 361);
    ball4.width = 32;
    ball4.height = 32;
    balls4.add(ball4);
    lastDropTime = TimeUtils.nanoTime();
}


//draws the balls
    for (Rectangle ball1 : balls1) {

        batch.draw(Ball, ball1.x, ball1.y);
    }

    for (Rectangle ball2 : balls2) {

        batch.draw(Ball, ball2.x, ball2.y);
    }

    for (Rectangle ball3 : balls3) {

        batch.draw(Ball, ball3.x, ball3.y);
    }

    for (Rectangle ball4 : balls4) {

        batch.draw(Ball, ball4.x, ball4.y);
    }


// if the time minus the time of the last ball spawn is less than x then spawn another ball in a random place
    if (TimeUtils.nanoTime() - lastDropTime > 1000000000) spawnBalls1();

    Iterator<Rectangle> iter1 = balls1.iterator();
    while(iter1.hasNext()) {

        Rectangle balls1 = iter1.next();
        balls1.y -= 500 * Gdx.graphics.getDeltaTime();
        if (balls1.overlaps(square)) {

            score++;
            showScore = "Score: " + score;
            iter1.remove();
        }
    }

    // if the time minus the time of the last ball spawn is less than x then spawn another ball in a random place
    if (TimeUtils.nanoTime() - lastDropTime > 1000000000) spawnBalls2();

    Iterator<Rectangle> iter2 = balls2.iterator();
    while (iter2.hasNext()) {

        Rectangle balls2 = iter2.next();
        balls2.x += 500 * Gdx.graphics.getDeltaTime();
        if (balls2.overlaps(square)) {

            score++;
            showScore = "Score: " + score;
            iter2.remove();
        }
    }

    // if the time minus the time of the last ball spawn is less than x then spawn another ball in a random place
    if (TimeUtils.nanoTime() - lastDropTime > 1000000000) spawnBalls3();

    Iterator<Rectangle> iter3 = balls3.iterator();
    while(iter3.hasNext()) {

        Rectangle balls3 = iter3.next();
        balls3.y += 500 * Gdx.graphics.getDeltaTime();
        if (balls3.overlaps(square)) {

            score++;
            showScore = "Score: " + score;
            iter3.remove();
        }
    }

    // if the time minus the time of the last ball spawn is less than x then spawn another ball in a random place
    if (TimeUtils.nanoTime() - lastDropTime > 1000000000) spawnBalls4();

    Iterator<Rectangle> iter4 = balls4.iterator();
    while(iter4.hasNext()) {

        Rectangle balls4 = iter4.next();
        balls4.x -= 500 * Gdx.graphics.getDeltaTime();
        if (balls4.overlaps(square)) {

            score++;
            showScore = "Score: " + score;
            iter4.remove();
        }
    }