/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BlackSpire (https://sketchfab.com/blackspire)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/cartoon-camping-kit-6baeb91fa58549e29f839a7e72fc1af1
title: Cartoon Camping Kit
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CartoonCampingKit(props) {
  const { nodes, materials } = useGLTF(
    "/assets/cartoon_camping_kit/scene.gltf"
  );
  return (
    // campfire
    <group {...props} dispose={null} scale={130} position={[-8, 0.35, -92]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0.19]} scale={0.01}>
            <group position={[44, 1, 0]} scale={2}>
              <mesh
                geometry={nodes.Campfire_03_Camping_mat_0.geometry}
                material={materials.Camping_mat}
                castShadow
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
