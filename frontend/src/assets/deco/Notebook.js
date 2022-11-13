/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Vanillain (https://sketchfab.com/vanillain)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/cartoon-notebook-pencil-bd3831c95ab04e719f6ba740289a6ed1
title: Cartoon Notebook & Pencil
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

import { useSelector, useDispatch } from "react-redux";
import { setTravelWriteIsOpen } from "../../modules/reverse";

export function Notebook({ props, event }) {
  const { nodes, materials } = useGLTF("/assets/notebook/scene.gltf");
  const travelWriteObject = useRef();
  // console.log("notebook");
  // console.log(event);

  // useFrame((state) => {
  //   if (event === 1) {
  //     gsap.to(travelWriteObject.current.position, {
  //       duration: 0.3,
  //       y: 0.4,
  //       ease: "Bounce.easeOut",
  //     });
  //   } else if (event !== 1) {
  //     gsap.to(travelWriteObject.current.position, {
  //       duration: 0.4,
  //       y: -2.2,
  //       ease: "Bounce.easeOut",
  //     });
  //   }
  // });

  // modal창 열어주세요
  const dispatch = useDispatch();

  return (
    <group
      {...props}
      dispose={null}
      onClick={() => {
        console.log("노트북 눌렀따");
        dispatch(setTravelWriteIsOpen());
      }}
    >
      <group
        ref={travelWriteObject}
        rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
        scale={0.05}
        position={[24, 0.4, -73.5]}
        // position={[46.5, 0.12, -72]}
        onPointerOver={(e) => {
          document.getElementsByTagName("body")[0].style.cursor = "pointer";
        }}
        onPointerLeave={(e) => {
          document.getElementsByTagName("body")[0].style.cursor = "";
        }}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-2.36, 21.71, -37.71]}
            rotation={[-1.07, -1.4, 2.78]}
            scale={1.06}
          >
            <mesh
              geometry={nodes["Pencil_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0.7]}>
            <mesh
              geometry={nodes.Rectangle004__0.geometry}
              material={materials.Rectangle004__0}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
