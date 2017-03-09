import javax.swing.JFrame;
import java.awt.event.KeyListener;
import java.awt.event.KeyEvent;
import java.awt.Color;

public class Pong implements KeyListener {
    private int WIDTH  = 640;   // hardwired dimensions
    private int HEIGHT = 480;   // of background.png
    private int DELTA = 8;

    private int x1 = 20;        // location of player A's paddle
    private int y1 = 240;
    private int x2 = 620;       // location of player B's paddle
    private int y2 = 240;

    private double x = 60.0;         // location of ball
    private double y = 140.0;
    private double vx = 2.0;         // velocity of ball
    private double vy = 1.0;

    private int score1 = 0;
    private int score2 = 0;

    private TurtlePanel turtle = new TurtlePanel(WIDTH, HEIGHT);

    public Pong() {
        JFrame f = new JFrame();
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setTitle("Pong 1.0");
        f.setResizable(false);
        f.setContentPane(turtle);
        f.pack();
        f.show();
        turtle.addKeyListener(this);
        //  call turtle.requestFocus() after mousePressed() event???
        draw();
    }

    public void keyPressed(KeyEvent e)  {
        if      (e.getKeyCode() ==  KeyEvent.VK_UP)    y2 = y2 + DELTA;
        else if (e.getKeyCode() ==  KeyEvent.VK_DOWN)  y2 = y2 - DELTA;
        else if (e.getKeyChar() ==  'i')               y1 = y1 + DELTA;
        else if (e.getKeyChar() ==  'k')               y1 = y1 - DELTA;
        draw();
    }
  
    public void keyReleased(KeyEvent e) { }
    public void keyTyped(KeyEvent e)    { }

    // either use synchronized or don't call draw() from event-based handling thread
    public synchronized void draw() {
        turtle.fly(WIDTH/2, HEIGHT/2);
        turtle.spot("background.png");
//        turtle.clear(Color.black);
        turtle.fly(x1, y1);
        turtle.spot("paddle.png");
        turtle.fly(x2, y2);
        turtle.spot("paddle.png");
        turtle.fly(x, y);
        turtle.spot("ball.png");
        turtle.setColor(Color.white);
        turtle.fly(30, 455);
        turtle.write(score1 + "");
        turtle.fly(610, 455);
        turtle.write(score2 + "");
        turtle.repaint();
    }

    public void play() {
        while (true) {
            if (x + vx < 0 || x + vx > WIDTH)  vx = -vx;
            if (y + vy < 0 || y + vy > HEIGHT) vy = -vy;
            x = x + vx;
            y = y + vy;
            draw();
            turtle.pause(30);
        }
    }


    // test client
    public static void main(String args[]) {
        Pong p = new Pong();
        p.play();
    }
 

   
}
