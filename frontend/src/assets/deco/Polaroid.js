/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: L3X (https://sketchfab.com/L3X)
license: SKETCHFAB Editorial (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/retro-polaroid-93862442911e4fe598d2b8bf04cee421
title: Retro Polaroid
*/

import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

import { useDispatch, useSelector } from "react-redux";
import { setTravelReadIsOpen } from "../../modules/reverse";

export function Polaroid({ props, position, event, rotation }) {
  const { nodes, materials } = useGLTF("/assets/retro_polaroid/scene.gltf");

  const travelObject = useRef();
  const travelSpot = useRef();

  // modal창 열어주세요
  const dispatch = useDispatch();

  // console.log(travelObject.current);

  return (
    <group
      {...props}
      dispose={null}
      onClick={() => {
        console.log("폴라로이드 눌렀다");
        dispatch(setTravelReadIsOpen());
      }}
    >
      <group
        ref={travelObject}
        // rotation={[-Math.PI / 2, 0, Math.PI / 1.2]}
        rotation={rotation}
        scale={0.05}
        // position={[20, 1.1, -70]}
        // position={[48.5, 0.8, -70]}
        position={position}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerOver={(e) => {
              document.getElementsByTagName("body")[0].style.cursor = "pointer";
            }}
            onPointerLeave={(e) => {
              document.getElementsByTagName("body")[0].style.cursor = "";
            }}
          >
            <mesh
              geometry={nodes.Polaroid_01_Mat_plastic_0.geometry}
              material={materials.Mat_plastic}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes.Polaroid_01_Mat_glass_0.geometry}
              material={materials.Mat_glass}
            />
            <mesh
              geometry={nodes.Polaroid_01_Mat_photo_0.geometry}
              material={materials.Mat_photo}
            />
          </group>
        </group>
      </group>

      {/* // FIXME: 다른 에셋에서 애니메이션 적용할구야 */}
      {/* 오브젝트 나타나는 지점
      <group ref={travelSpot}>
        <mesh
          rotation={[-0.5 * Math.PI, 0, -0.2 * Math.PI]}
          receiveShadow
          position={[38, 0.01, -68]}
        >
          <planeBufferGeometry attach="geometry" args={[20, 20]} />
          <meshBasicMaterial color="blue" opacity={0.5} transparent />
        </mesh>
      </group> */}
    </group>
  );
}

useGLTF.preload("/scene.gltf");
