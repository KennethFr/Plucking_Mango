class Slingshot{
    constructor(body1 , point2 ){
        var options= {
        bodyA: body1,
        pointB: point2,
        length: 2,
        stiffness: 0.004,

      }
      this.sling= Constraint.create(options)
      World.add(world,this.sling)
    }
    display(){
      if (this.sling.bodyA){
        var pointA= this.sling.bodyA.position
        var pointB= this.sling.pointB
        strokeWeight(4)
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y) 
      }
    }
    fly(){
      this.sling.bodyA=null
    }
    attach(body){
      this.sling.bodyA=body
    }
}