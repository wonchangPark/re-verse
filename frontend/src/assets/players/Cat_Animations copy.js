/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GLTFLoader from "gltfjsx/src/utils/glftLoader";
import { useFrame } from "@react-three/fiber";

export default function CatAnimations({
  action,
  destinationPoint,
  handleCurrentPosition,
  handleVisible,
}) {
  const group = useRef();
  // const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Cat_Animations.gltf"
  );
  const { actions } = useAnimations(animations, group);
    console.log(actions);

  const [moving, setMoving] = useState(false);
  let angle = 0;

  // 이벤트 발생할 오브젝트의 좌표
  const objectPosition = new THREE.Vector3(-20, 0.01, 3);
  // console.log(objectPosition);
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (destinationPoint) {
      setMoving(true);
      // console.log(group.current); // player.modelmesh
      group.current.lookAt(destinationPoint);
      group.current.name = "mememememe";

      console.log(group.current);
    }
  }, [destinationPoint]);
  useFrame((state) => {
    actions["Idle_A"].play();
    if (group.current) {
      state.camera.lookAt(group.current.position);
    }

    if (group.current) {
      if (moving) {
        angle = Math.atan2(
          destinationPoint.z - group.current.position.z,
          destinationPoint.x - group.current.position.x
        );
        group.current.position.x += Math.cos(angle) * 0.05;
        group.current.position.z += Math.sin(angle) * 0.05;

        state.camera.position.x = 1 + group.current.position.x;
        state.camera.position.z = 5 + group.current.position.z;

        // console.log(group.current.position);

        // handleCurrentPosition(group.current.position);

        actions["Idle_A"].stop();
        actions["Walk"].play();
        // console.log("우리 고양이 걷는다");

        if (
          Math.abs(destinationPoint.x - group.current.position.x) < 0.03 &&
          Math.abs(destinationPoint.z - group.current.position.z) < 0.03
        ) {
          setMoving(false);
          actions["Walk"].stop();
          actions["Idle_A"].play();
          // console.log("우리 고양이 멈춘다");
        }

        // 오브젝트 visible event
        if (
          Math.abs(objectPosition.x - group.current.position.x) < 4 &&
          Math.abs(objectPosition.z - group.current.position.z) < 4
        ) {
          handleVisible(true);
          // setVisible(true);
        } else {
          handleVisible(false);
        }
      }
    }
  });

  // useEffect(() => {
  //   if (previousAction) {
  //     actions[previousAction].fadeOut(0.2);
  //     actions[action].stop();
  //   }
  //   actions[action].play();
  //   actions[action].fadeIn(0.2);
  //   // actions.Idle_A.play();
  // }, [actions, action, previousAction]);
  return (
    // <group ref={group} dispose={null}>
    <group ref={group} dispose={null} position={[-30, 0, -30]}>
      <group name="Scene">
        <group name="Rig">
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Cat"
            geometry={nodes.Cat.geometry}
            material={materials.M_Cat}
            skeleton={nodes.Cat.skeleton}
            morphTargetDictionary={nodes.Cat.morphTargetDictionary}
            morphTargetInfluences={nodes.Cat.morphTargetInfluences}
            // 그림자 설정은 여기에!
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Cat_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
