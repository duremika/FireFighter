gdjs.StartCode = {};
gdjs.StartCode.GDRoadVerticalObjects1= [];
gdjs.StartCode.GDRoadVerticalObjects2= [];
gdjs.StartCode.GDRoadVerticalObjects3= [];
gdjs.StartCode.GDRoadVerticalObjects4= [];
gdjs.StartCode.GDRoadHorizontalObjects1= [];
gdjs.StartCode.GDRoadHorizontalObjects2= [];
gdjs.StartCode.GDRoadHorizontalObjects3= [];
gdjs.StartCode.GDRoadHorizontalObjects4= [];
gdjs.StartCode.GDCrossRoadObjects1= [];
gdjs.StartCode.GDCrossRoadObjects2= [];
gdjs.StartCode.GDCrossRoadObjects3= [];
gdjs.StartCode.GDCrossRoadObjects4= [];
gdjs.StartCode.GDHouseObjects1= [];
gdjs.StartCode.GDHouseObjects2= [];
gdjs.StartCode.GDHouseObjects3= [];
gdjs.StartCode.GDHouseObjects4= [];
gdjs.StartCode.GDFireFighterObjects1= [];
gdjs.StartCode.GDFireFighterObjects2= [];
gdjs.StartCode.GDFireFighterObjects3= [];
gdjs.StartCode.GDFireFighterObjects4= [];
gdjs.StartCode.GDObstacleObjects1= [];
gdjs.StartCode.GDObstacleObjects2= [];
gdjs.StartCode.GDObstacleObjects3= [];
gdjs.StartCode.GDObstacleObjects4= [];
gdjs.StartCode.GDPixelFlameObjects1= [];
gdjs.StartCode.GDPixelFlameObjects2= [];
gdjs.StartCode.GDPixelFlameObjects3= [];
gdjs.StartCode.GDPixelFlameObjects4= [];
gdjs.StartCode.GDPixelSmokeObjects1= [];
gdjs.StartCode.GDPixelSmokeObjects2= [];
gdjs.StartCode.GDPixelSmokeObjects3= [];
gdjs.StartCode.GDPixelSmokeObjects4= [];
gdjs.StartCode.GDPixelTrailObjects1= [];
gdjs.StartCode.GDPixelTrailObjects2= [];
gdjs.StartCode.GDPixelTrailObjects3= [];
gdjs.StartCode.GDPixelTrailObjects4= [];
gdjs.StartCode.GDArrowObjects1= [];
gdjs.StartCode.GDArrowObjects2= [];
gdjs.StartCode.GDArrowObjects3= [];
gdjs.StartCode.GDArrowObjects4= [];
gdjs.StartCode.GDFireHydrantObjects1= [];
gdjs.StartCode.GDFireHydrantObjects2= [];
gdjs.StartCode.GDFireHydrantObjects3= [];
gdjs.StartCode.GDFireHydrantObjects4= [];
gdjs.StartCode.GDWaterFrameObjects1= [];
gdjs.StartCode.GDWaterFrameObjects2= [];
gdjs.StartCode.GDWaterFrameObjects3= [];
gdjs.StartCode.GDWaterFrameObjects4= [];
gdjs.StartCode.GDWaterScaleObjects1= [];
gdjs.StartCode.GDWaterScaleObjects2= [];
gdjs.StartCode.GDWaterScaleObjects3= [];
gdjs.StartCode.GDWaterScaleObjects4= [];
gdjs.StartCode.GDAchiveObjects1= [];
gdjs.StartCode.GDAchiveObjects2= [];
gdjs.StartCode.GDAchiveObjects3= [];
gdjs.StartCode.GDAchiveObjects4= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDHouseObjects1Objects = Hashtable.newFrom({"House": gdjs.StartCode.GDHouseObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.StartCode.GDObstacleObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireFighterObjects2Objects = Hashtable.newFrom({"FireFighter": gdjs.StartCode.GDFireFighterObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelFlameObjects2Objects = Hashtable.newFrom({"PixelFlame": gdjs.StartCode.GDPixelFlameObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireFighterObjects2Objects = Hashtable.newFrom({"FireFighter": gdjs.StartCode.GDFireFighterObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelFlameObjects2Objects = Hashtable.newFrom({"PixelFlame": gdjs.StartCode.GDPixelFlameObjects2});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.StartCode.GDFireFighterObjects2, gdjs.StartCode.GDFireFighterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDFireFighterObjects3.length;i<l;++i) {
    if ( gdjs.StartCode.GDFireFighterObjects3[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDFireFighterObjects3[k] = gdjs.StartCode.GDFireFighterObjects3[i];
        ++k;
    }
}
gdjs.StartCode.GDFireFighterObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StartCode.GDPixelTrailObjects2, gdjs.StartCode.GDPixelTrailObjects3);

{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects3[i].stopEmission();
}
}}

}


{

/* Reuse gdjs.StartCode.GDFireFighterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PixelFlame"), gdjs.StartCode.GDPixelFlameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireFighterObjects2Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelFlameObjects2Objects, 60, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.turnedTowardTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireFighterObjects2Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelFlameObjects2Objects, 45, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDPixelFlameObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPixelFlameObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelFlameObjects2[i].setFlow(gdjs.StartCode.GDPixelFlameObjects2[i].getFlow() - (5));
}
}}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireFighterObjects1Objects = Hashtable.newFrom({"FireFighter": gdjs.StartCode.GDFireFighterObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireHydrantObjects1Objects = Hashtable.newFrom({"FireHydrant": gdjs.StartCode.GDFireHydrantObjects1});
gdjs.StartCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FireFighter"), gdjs.StartCode.GDFireFighterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDFireFighterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDFireFighterObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDFireFighterObjects2[k] = gdjs.StartCode.GDFireFighterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDFireFighterObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.StartCode.GDArrowObjects2);
/* Reuse gdjs.StartCode.GDFireFighterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PixelFlame"), gdjs.StartCode.GDPixelFlameObjects2);
gdjs.copyArray(runtimeScene.getObjects("PixelTrail"), gdjs.StartCode.GDPixelTrailObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.StartCode.GDFireFighterObjects2.length !== 0 ? gdjs.StartCode.GDFireFighterObjects2[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.StartCode.GDFireFighterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDFireFighterObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects2[i].setPosition((( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getPointX("")),(( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects2[i].setAngle((( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects2[i].putAroundObject((gdjs.StartCode.GDFireFighterObjects2.length !== 0 ? gdjs.StartCode.GDFireFighterObjects2[0] : null), 15, (( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.StartCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDArrowObjects2[i].setAngle(gdjs.toDegrees(Math.atan2((( gdjs.StartCode.GDPixelFlameObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects2[0].getY()) - (( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getPointY("")), (( gdjs.StartCode.GDPixelFlameObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects2[0].getX()) - (( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getPointX("")))));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("touched"), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireFighter"), gdjs.StartCode.GDFireFighterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDFireFighterObjects2.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDFireFighterObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDFireFighterObjects2[k] = gdjs.StartCode.GDFireFighterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDFireFighterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDFireFighterObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDFireFighterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDFireFighterObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireFighter"), gdjs.StartCode.GDFireFighterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDFireFighterObjects2.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDFireFighterObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDFireFighterObjects2[k] = gdjs.StartCode.GDFireFighterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDFireFighterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDFireFighterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PixelTrail"), gdjs.StartCode.GDPixelTrailObjects2);
gdjs.copyArray(runtimeScene.getObjects("WaterScale"), gdjs.StartCode.GDWaterScaleObjects2);
{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects2[i].startEmission();
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDFireFighterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDFireFighterObjects2[i].getBehavior("Health").SetHealth((gdjs.StartCode.GDFireFighterObjects2[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartCode.GDWaterScaleObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDWaterScaleObjects2[i].getBehavior("Scale").setScaleX((( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 100.0);
}
}
{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PixelTrail"), gdjs.StartCode.GDPixelTrailObjects2);
{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects2[i].stopEmission();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireFighter"), gdjs.StartCode.GDFireFighterObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireHydrant"), gdjs.StartCode.GDFireHydrantObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireFighterObjects1Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDFireHydrantObjects1Objects, 25, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDFireFighterObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WaterScale"), gdjs.StartCode.GDWaterScaleObjects1);
{for(var i = 0, len = gdjs.StartCode.GDFireFighterObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFireFighterObjects1[i].getBehavior("Health").SetHealth((gdjs.StartCode.GDFireFighterObjects1[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartCode.GDWaterScaleObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDWaterScaleObjects1[i].getBehavior("Scale").setScaleX((( gdjs.StartCode.GDFireFighterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 100.0);
}
}}

}


};gdjs.StartCode.mapOfEmptyGDPixelFlameObjects = Hashtable.newFrom({"PixelFlame": []});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelFlameObjects2Objects = Hashtable.newFrom({"PixelFlame": gdjs.StartCode.GDPixelFlameObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelSmokeObjects2Objects = Hashtable.newFrom({"PixelSmoke": gdjs.StartCode.GDPixelSmokeObjects2});
gdjs.StartCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.StartCode.GDAchiveObjects1, gdjs.StartCode.GDAchiveObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDAchiveObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDAchiveObjects2[i].getVariableNumber(gdjs.StartCode.GDAchiveObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDAchiveObjects2[k] = gdjs.StartCode.GDAchiveObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDAchiveObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDAchiveObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDAchiveObjects2[i].getVariableNumber(gdjs.StartCode.GDAchiveObjects2[i].getVariables().getFromIndex(0)) <= 5 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDAchiveObjects2[k] = gdjs.StartCode.GDAchiveObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDAchiveObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDAchiveObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDAchiveObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDAchiveObjects2[i].setColor("233;119;6");
}
}}

}


{

gdjs.copyArray(gdjs.StartCode.GDAchiveObjects1, gdjs.StartCode.GDAchiveObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDAchiveObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDAchiveObjects2[i].getVariableNumber(gdjs.StartCode.GDAchiveObjects2[i].getVariables().getFromIndex(0)) > 5 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDAchiveObjects2[k] = gdjs.StartCode.GDAchiveObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDAchiveObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDAchiveObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDAchiveObjects2[i].getVariableNumber(gdjs.StartCode.GDAchiveObjects2[i].getVariables().getFromIndex(0)) <= 10 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDAchiveObjects2[k] = gdjs.StartCode.GDAchiveObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDAchiveObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDAchiveObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDAchiveObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDAchiveObjects2[i].setColor("193;193;212");
}
}}

}


{

gdjs.copyArray(gdjs.StartCode.GDAchiveObjects1, gdjs.StartCode.GDAchiveObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDAchiveObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDAchiveObjects2[i].getVariableNumber(gdjs.StartCode.GDAchiveObjects2[i].getVariables().getFromIndex(0)) > 10 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDAchiveObjects2[k] = gdjs.StartCode.GDAchiveObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDAchiveObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDAchiveObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDAchiveObjects2[i].getVariableNumber(gdjs.StartCode.GDAchiveObjects2[i].getVariables().getFromIndex(0)) <= 25 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDAchiveObjects2[k] = gdjs.StartCode.GDAchiveObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDAchiveObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDAchiveObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDAchiveObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDAchiveObjects2[i].setColor("255;232;20");
}
}}

}


{

/* Reuse gdjs.StartCode.GDAchiveObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDAchiveObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDAchiveObjects1[i].getVariableNumber(gdjs.StartCode.GDAchiveObjects1[i].getVariables().getFromIndex(0)) > 25 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDAchiveObjects1[k] = gdjs.StartCode.GDAchiveObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDAchiveObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDAchiveObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDAchiveObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDAchiveObjects1[i].setColor("235;235;208");
}
}}

}


};gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartCode.mapOfEmptyGDPixelFlameObjects) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.StartCode.GDArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("FireFighter"), gdjs.StartCode.GDFireFighterObjects2);
gdjs.StartCode.GDPixelFlameObjects2.length = 0;

gdjs.StartCode.GDPixelSmokeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelFlameObjects2Objects, gdjs.random(9) * 112 + 74, gdjs.random(9) * 63 + 46, "");
}{for(var i = 0, len = gdjs.StartCode.GDPixelFlameObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelFlameObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPixelSmokeObjects2Objects, (( gdjs.StartCode.GDPixelFlameObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects2[0].getX()), (( gdjs.StartCode.GDPixelFlameObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects2[0].getY()), "");
}{for(var i = 0, len = gdjs.StartCode.GDPixelSmokeObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPixelSmokeObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.StartCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDArrowObjects2[i].setAngle(gdjs.toDegrees(Math.atan2((( gdjs.StartCode.GDPixelFlameObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects2[0].getY()) - (( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getPointY("")), (( gdjs.StartCode.GDPixelFlameObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects2[0].getX()) - (( gdjs.StartCode.GDFireFighterObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects2[0].getPointX("")))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PixelFlame"), gdjs.StartCode.GDPixelFlameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDPixelFlameObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDPixelFlameObjects1[i].getFlow() <= 10 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDPixelFlameObjects1[k] = gdjs.StartCode.GDPixelFlameObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPixelFlameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Achive"), gdjs.StartCode.GDAchiveObjects1);
/* Reuse gdjs.StartCode.GDPixelFlameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PixelSmoke"), gdjs.StartCode.GDPixelSmokeObjects1);
{for(var i = 0, len = gdjs.StartCode.GDPixelFlameObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPixelFlameObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelSmokeObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPixelSmokeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.StartCode.GDAchiveObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDAchiveObjects1[i].returnVariable(gdjs.StartCode.GDAchiveObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{ //Subevents
gdjs.StartCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FireFighter"), gdjs.StartCode.GDFireFighterObjects1);
gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.StartCode.GDHouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.StartCode.GDObstacleObjects1);
{for(var i = 0, len = gdjs.StartCode.GDFireFighterObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFireFighterObjects1[i].separateFromObjectsList(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDHouseObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.StartCode.GDFireFighterObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFireFighterObjects1[i].separateFromObjectsList(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDObstacleObjects1Objects, true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Achive"), gdjs.StartCode.GDAchiveObjects1);
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.StartCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireFighter"), gdjs.StartCode.GDFireFighterObjects1);
gdjs.copyArray(runtimeScene.getObjects("PixelFlame"), gdjs.StartCode.GDPixelFlameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PixelTrail"), gdjs.StartCode.GDPixelTrailObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.StartCode.GDFireFighterObjects1.length !== 0 ? gdjs.StartCode.GDFireFighterObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Obstacle");
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects1[i].setPosition((( gdjs.StartCode.GDFireFighterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects1[0].getPointX("")),(( gdjs.StartCode.GDFireFighterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects1[i].setAngle((( gdjs.StartCode.GDFireFighterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects1[i].putAroundObject((gdjs.StartCode.GDFireFighterObjects1.length !== 0 ? gdjs.StartCode.GDFireFighterObjects1[0] : null), 15, (( gdjs.StartCode.GDFireFighterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.StartCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDArrowObjects1[i].setAngle(gdjs.toDegrees(Math.atan2((( gdjs.StartCode.GDPixelFlameObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects1[0].getY()) - (( gdjs.StartCode.GDFireFighterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects1[0].getPointY("")), (( gdjs.StartCode.GDPixelFlameObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDPixelFlameObjects1[0].getX()) - (( gdjs.StartCode.GDFireFighterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDFireFighterObjects1[0].getPointX("")))));
}
}{for(var i = 0, len = gdjs.StartCode.GDPixelTrailObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPixelTrailObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDAchiveObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDAchiveObjects1[i].setColor("100;100;100");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("touched"), false);
}}

}


{


gdjs.StartCode.eventsList1(runtimeScene);
}


{


gdjs.StartCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("touched"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10339796);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "zvuk-ulicy.mp3", true, 50, 1);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDRoadVerticalObjects1.length = 0;
gdjs.StartCode.GDRoadVerticalObjects2.length = 0;
gdjs.StartCode.GDRoadVerticalObjects3.length = 0;
gdjs.StartCode.GDRoadVerticalObjects4.length = 0;
gdjs.StartCode.GDRoadHorizontalObjects1.length = 0;
gdjs.StartCode.GDRoadHorizontalObjects2.length = 0;
gdjs.StartCode.GDRoadHorizontalObjects3.length = 0;
gdjs.StartCode.GDRoadHorizontalObjects4.length = 0;
gdjs.StartCode.GDCrossRoadObjects1.length = 0;
gdjs.StartCode.GDCrossRoadObjects2.length = 0;
gdjs.StartCode.GDCrossRoadObjects3.length = 0;
gdjs.StartCode.GDCrossRoadObjects4.length = 0;
gdjs.StartCode.GDHouseObjects1.length = 0;
gdjs.StartCode.GDHouseObjects2.length = 0;
gdjs.StartCode.GDHouseObjects3.length = 0;
gdjs.StartCode.GDHouseObjects4.length = 0;
gdjs.StartCode.GDFireFighterObjects1.length = 0;
gdjs.StartCode.GDFireFighterObjects2.length = 0;
gdjs.StartCode.GDFireFighterObjects3.length = 0;
gdjs.StartCode.GDFireFighterObjects4.length = 0;
gdjs.StartCode.GDObstacleObjects1.length = 0;
gdjs.StartCode.GDObstacleObjects2.length = 0;
gdjs.StartCode.GDObstacleObjects3.length = 0;
gdjs.StartCode.GDObstacleObjects4.length = 0;
gdjs.StartCode.GDPixelFlameObjects1.length = 0;
gdjs.StartCode.GDPixelFlameObjects2.length = 0;
gdjs.StartCode.GDPixelFlameObjects3.length = 0;
gdjs.StartCode.GDPixelFlameObjects4.length = 0;
gdjs.StartCode.GDPixelSmokeObjects1.length = 0;
gdjs.StartCode.GDPixelSmokeObjects2.length = 0;
gdjs.StartCode.GDPixelSmokeObjects3.length = 0;
gdjs.StartCode.GDPixelSmokeObjects4.length = 0;
gdjs.StartCode.GDPixelTrailObjects1.length = 0;
gdjs.StartCode.GDPixelTrailObjects2.length = 0;
gdjs.StartCode.GDPixelTrailObjects3.length = 0;
gdjs.StartCode.GDPixelTrailObjects4.length = 0;
gdjs.StartCode.GDArrowObjects1.length = 0;
gdjs.StartCode.GDArrowObjects2.length = 0;
gdjs.StartCode.GDArrowObjects3.length = 0;
gdjs.StartCode.GDArrowObjects4.length = 0;
gdjs.StartCode.GDFireHydrantObjects1.length = 0;
gdjs.StartCode.GDFireHydrantObjects2.length = 0;
gdjs.StartCode.GDFireHydrantObjects3.length = 0;
gdjs.StartCode.GDFireHydrantObjects4.length = 0;
gdjs.StartCode.GDWaterFrameObjects1.length = 0;
gdjs.StartCode.GDWaterFrameObjects2.length = 0;
gdjs.StartCode.GDWaterFrameObjects3.length = 0;
gdjs.StartCode.GDWaterFrameObjects4.length = 0;
gdjs.StartCode.GDWaterScaleObjects1.length = 0;
gdjs.StartCode.GDWaterScaleObjects2.length = 0;
gdjs.StartCode.GDWaterScaleObjects3.length = 0;
gdjs.StartCode.GDWaterScaleObjects4.length = 0;
gdjs.StartCode.GDAchiveObjects1.length = 0;
gdjs.StartCode.GDAchiveObjects2.length = 0;
gdjs.StartCode.GDAchiveObjects3.length = 0;
gdjs.StartCode.GDAchiveObjects4.length = 0;

gdjs.StartCode.eventsList4(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
