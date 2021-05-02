/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
import java.util.*;
public class Graph
{
	public static void main(String[] args) {
        System.out.println("Hello");
    	Graph g = new Graph(8);
    	g.adj[0].add(1);
		
		g.adj[1].add(2);
		
		g.adj[2].add(3);
		
		g.adj[2].add(4);
		
		g.adj[3].add(0);
		
		g.adj[4].add(5);
		
		g.adj[5].add(6);
		
		g.adj[6].add(4);
		
		g.adj[6].add(7);
		
	}
}
