/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Garu Games (https://sketchfab.com/garugames)
license: SKETCHFAB Editorial (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/low-poly-80s-hacker-room-081a73b15f104a1b82c57874d4205c04
title: Low Poly 80's Hacker Room 🕹️
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF("/assets/hacker_room/scene.gltf");
  return (
    <group {...props} dispose={null} scale={4} position={[-120, 0, -120]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.34, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Wall}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Floor}
            />
          </group>
          <group position={[4, 0.34, 4]} scale={[1.28, 1.35, 1.28]}>
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.material}
            />
          </group>
          <group position={[-3.1, 0, 2.69]} scale={0.82}>
            <group position={[0.81, 2.83, 0.27]} rotation={[0, 0, -0.24]}>
              <mesh
                geometry={nodes.Object_14.geometry}
                material={materials.Yellow_Glow}
              />
            </group>
            <group position={[0.81, 2.83, -1.04]} rotation={[0, 0, -0.24]}>
              <mesh
                geometry={nodes.Object_16.geometry}
                material={materials.Yellow_Glow}
              />
            </group>
            <group position={[1.1, 2.82, 0.63]} rotation={[0, 0, -0.24]}>
              <mesh
                geometry={nodes.Object_18.geometry}
                material={materials.Black}
              />
              <mesh
                geometry={nodes.Object_19.geometry}
                material={materials.material}
              />
            </group>
            <group position={[1.1, 2.82, -0.68]} rotation={[0, 0, -0.24]}>
              <mesh
                geometry={nodes.Object_21.geometry}
                material={materials.Black}
              />
              <mesh
                geometry={nodes.Object_22.geometry}
                material={materials.material}
              />
            </group>
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Arcade_screen}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Glow}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Logo}
            />
          </group>
          <group
            position={[0.2, 0.33, 0.13]}
            rotation={[0, -0.45, 0]}
            scale={1.17}
          >
            <mesh
              geometry={nodes.Object_26.geometry}
              material={materials.Black}
            />
            <group position={[0, 1.41, 0]} scale={1.19}>
              <group rotation={[0, 1.55, 0]} scale={0.84}>
                <mesh
                  geometry={nodes.Object_30.geometry}
                  material={materials.Black}
                />
              </group>
              <mesh
                geometry={nodes.Object_28.geometry}
                material={materials.material}
              />
            </group>
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.Metal}
            />
          </group>
          <group position={[-2.41, 0.34, -0.29]}>
            <mesh
              geometry={nodes.Object_32.geometry}
              material={materials.Grey}
            />
          </group>
          <group position={[-4, 4.82, -2.2]}>
            <mesh
              geometry={nodes.Object_34.geometry}
              material={materials.Wood}
            />
          </group>
          <group position={[-4, 4.96, -1.15]} rotation={[-0.19, 0, 0]}>
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_37.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -1.38]} scale={[0.93, 0.9, 0.66]}>
            <mesh
              geometry={nodes.Object_39.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_40.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -1.46]} scale={0.96}>
            <mesh
              geometry={nodes.Object_42.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_43.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -1.59]} scale={[0.93, 1.1, 0.66]}>
            <mesh
              geometry={nodes.Object_45.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_46.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -1.68]} scale={0.96}>
            <mesh
              geometry={nodes.Object_48.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_49.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[-4, 4.94, -1.85]}
            rotation={[0.09, 0, 0]}
            scale={[0.96, 1.05, 0.96]}
          >
            <mesh
              geometry={nodes.Object_51.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_52.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -1.97]} scale={[0.93, 0.9, 0.51]}>
            <mesh
              geometry={nodes.Object_54.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_55.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -2.04]} scale={0.96}>
            <mesh
              geometry={nodes.Object_57.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_58.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -2.16]} scale={[0.93, 1.1, 0.66]}>
            <mesh
              geometry={nodes.Object_60.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_61.geometry}
              material={materials.White}
            />
          </group>
          <group position={[-4, 4.94, -2.25]} scale={[0.93, 0.9, 0.66]}>
            <mesh
              geometry={nodes.Object_63.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_64.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[-4, 4.94, -2.41]}
            rotation={[0.15, 0, 0]}
            scale={[0.96, 1.04, 0.47]}
          >
            <mesh
              geometry={nodes.Object_66.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_67.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[-3.29, 5.05, -2.99]}
            rotation={[-Math.PI / 2, 0, 2.41]}
            scale={0.96}
          >
            <mesh
              geometry={nodes.Object_69.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_70.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[-3.3, 5.13, -3.05]}
            rotation={[-Math.PI / 2, 0, 2.62]}
            scale={[0.89, 0.95, 0.66]}
          >
            <mesh
              geometry={nodes.Object_72.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_73.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[-3.43, 5.22, -3.12]}
            rotation={[-Math.PI / 2, 0, 2.99]}
            scale={[0.93, 0.9, 0.66]}
          >
            <mesh
              geometry={nodes.Object_75.geometry}
              material={materials.Book}
            />
            <mesh
              geometry={nodes.Object_76.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[-1.73, 2.03, -1.96]}
            rotation={[0, 0.71, 0]}
            scale={1.32}
          >
            <group position={[-0.03, 0, 0.01]} rotation={[0.1, 0, 0]}>
              <mesh
                geometry={nodes.Object_80.geometry}
                material={materials.Grey}
              />
            </group>
            <mesh
              geometry={nodes.Object_78.geometry}
              material={materials["Computer-beige"]}
            />
          </group>
          <group
            position={[2.31, 2.74, -3.9]}
            rotation={[1.48, -Math.PI / 2, 0]}
            scale={1.32}
          >
            <group rotation={[0.09, 0, 0]}>
              <mesh
                geometry={nodes.Object_84.geometry}
                material={materials.Grey}
              />
            </group>
            <mesh
              geometry={nodes.Object_82.geometry}
              material={materials["Computer-beige"]}
            />
          </group>
          <group
            position={[-3.51, 1.99, -1.61]}
            rotation={[0, 1.39, 0]}
            scale={1.2}
          >
            <group
              position={[0, 1.21, 0.46]}
              rotation={[-0.75, 0, 0]}
              scale={0.73}
            >
              <group
                position={[0, -0.21, 0]}
                rotation={[0.7, -1.23, 0]}
                scale={1.36}
              >
                <mesh
                  geometry={nodes.Object_90.geometry}
                  material={materials.material_0}
                />
              </group>
              <mesh
                geometry={nodes.Object_88.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 0.05, 0]}>
              <mesh
                geometry={nodes.Object_92.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              geometry={nodes.Object_86.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[-3.99, 4.53, 0.58]}
            rotation={[-2.93, 0, -Math.PI / 2]}
            scale={3.5}
          >
            <mesh
              geometry={nodes.Object_94.geometry}
              material={materials.material_0}
            />
          </group>
          <group
            position={[-3.94, 4.11, -0.01]}
            rotation={[3.09, 0, -Math.PI / 2]}
            scale={2.12}
          >
            <mesh
              geometry={nodes.Object_96.geometry}
              material={materials.material_0}
            />
          </group>
          <group position={[-0.8, 4.29, -4]}>
            <mesh
              geometry={nodes.Object_98.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_99.geometry}
              material={materials.Poster1}
            />
          </group>
          <group
            position={[2.23, 4.29, -4]}
            rotation={[0, 0, 0.16]}
            scale={0.7}
          >
            <mesh
              geometry={nodes.Object_101.geometry}
              material={materials["Black-gloss"]}
            />
            <mesh
              geometry={nodes.Object_102.geometry}
              material={materials.Poster2}
            />
          </group>

          {/* // TODO: FLOOR MESH 바꾸자!!!!!!!!!!!!!!!!!!!
          // TODO: FLOOR MESH 바꾸자!!!!!!!!!!!!!!!!!!!
          // TODO: FLOOR MESH 바꾸자!!!!!!!!!!!!!!!!!!!
          // TODO: FLOOR MESH 바꾸자!!!!!!!!!!!!!!!!!!!
          // TODO: FLOOR MESH 바꾸자!!!!!!!!!!!!!!!!!!!
          // TODO: FLOOR MESH 바꾸자!!!!!!!!!!!!!!!!!!!
          // TODO: FLOOR MESH 바꾸자!!!!!!!!!!!!!!!!!!! */}
          {/* <group position={[0, 0.04, 0]} scale={21.23}>
            <mesh
              geometry={nodes.Object_104.geometry}
              material={materials.material_18}
            />
          </group> */}
          <group position={[-3.64, 4.94, -0.73]} rotation={[0, 0.29, 0]}>
            <mesh
              geometry={nodes.Object_108.geometry}
              material={materials["Black-gloss"]}
            />
            <mesh
              geometry={nodes.Object_106.geometry}
              material={materials.Black}
            />
          </group>
          <group position={[-3.6, 4.94, -3.66]} rotation={[0, -0.5, 0]}>
            <mesh
              geometry={nodes.Object_112.geometry}
              material={materials["Black-gloss"]}
            />
            <mesh
              geometry={nodes.Object_110.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[-2.75, -0.17, -1.52]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.86}
          >
            <group
              position={[-1.51, 2.52, -0.56]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.16}
            >
              <mesh
                geometry={nodes.Object_119.geometry}
                material={materials.Black}
              />
              <mesh
                geometry={nodes.Object_120.geometry}
                material={materials["Computer-beige"]}
              />
              <mesh
                geometry={nodes.Object_121.geometry}
                material={materials.Grey}
              />
              <group
                position={[0.35, 0.17, -0.11]}
                rotation={[Math.PI / 2, 1.39, -Math.PI / 2]}
                scale={1.32}
              >
                <mesh
                  geometry={nodes.Object_123.geometry}
                  material={materials.Grey}
                />
              </group>
              <mesh
                geometry={nodes.Object_116.geometry}
                material={materials["Computer-beige"]}
              />
              <mesh
                geometry={nodes.Object_117.geometry}
                material={materials["Screen-dos"]}
              />
            </group>
            <group
              position={[1.62, 2.52, -0.23]}
              rotation={[0, -0.64, 0]}
              scale={1.42}
            >
              <mesh
                geometry={nodes.Object_127.geometry}
                material={materials["Computer-beige"]}
              />
              <group position={[0, 0, -0.1]}>
                <mesh
                  geometry={nodes.Object_129.geometry}
                  material={materials.Black}
                />
              </group>
              <group position={[0.4, 0.18, 0.42]} rotation={[-0.11, 0, 0]}>
                <mesh
                  geometry={nodes.Object_131.geometry}
                  material={materials.material}
                />
              </group>
              <group position={[-0.45, 0.11, 0.43]}>
                <mesh
                  geometry={nodes.Object_133.geometry}
                  material={materials["Computer-beige"]}
                />
                <mesh
                  geometry={nodes.Object_134.geometry}
                  material={materials.Yellow_Glow}
                />
              </group>
              <group position={[-0.41, 0.11, 0.43]}>
                <mesh
                  geometry={nodes.Object_136.geometry}
                  material={materials["Computer-beige"]}
                />
                <mesh
                  geometry={nodes.Object_137.geometry}
                  material={materials.Yellow_Glow}
                />
              </group>
              <group position={[0.01, 0.26, 0.04]} scale={1.22}>
                <mesh
                  geometry={nodes.Object_139.geometry}
                  material={materials["Computer-beige"]}
                />
                <mesh
                  geometry={nodes.Object_140.geometry}
                  material={materials["Screen-nc"]}
                />
              </group>
              <mesh
                geometry={nodes.Object_125.geometry}
                material={materials["Computer-beige"]}
              />
            </group>
            <group scale={1.18}>
              <mesh
                geometry={nodes.Object_142.geometry}
                material={materials.Wood}
              />
            </group>
            <mesh
              geometry={nodes.Object_114.geometry}
              material={materials.Wood}
            />
          </group>
          <group position={[0.87, -0.17, -2.86]} scale={0.86}>
            <group position={[-2.03, 2.52, -0.69]} scale={1.42}>
              <mesh
                geometry={nodes.Object_148.geometry}
                material={materials["Computer-beige"]}
              />
              <mesh
                geometry={nodes.Object_150.geometry}
                material={materials.Black}
              />
              <group position={[0.4, 0.18, 0.42]} rotation={[-0.11, 0, 0]}>
                <mesh
                  geometry={nodes.Object_152.geometry}
                  material={materials.material}
                />
              </group>
              <group position={[-0.45, 0.11, 0.43]}>
                <mesh
                  geometry={nodes.Object_154.geometry}
                  material={materials["Computer-beige"]}
                />
                <mesh
                  geometry={nodes.Object_155.geometry}
                  material={materials.Yellow_Glow}
                />
              </group>
              <group position={[-0.41, 0.11, 0.43]}>
                <mesh
                  geometry={nodes.Object_157.geometry}
                  material={materials["Computer-beige"]}
                />
                <mesh
                  geometry={nodes.Object_158.geometry}
                  material={materials.Yellow_Glow}
                />
              </group>
              <group position={[0.01, 0.26, 0.04]}>
                <mesh
                  geometry={nodes.Object_160.geometry}
                  material={materials["Computer-beige"]}
                />
                <mesh
                  geometry={nodes.Object_161.geometry}
                  material={materials["Screen-qb"]}
                />
              </group>
              <mesh
                geometry={nodes.Object_146.geometry}
                material={materials["Computer-beige"]}
              />
            </group>
            <group scale={1.18}>
              <mesh
                geometry={nodes.Object_163.geometry}
                material={materials.Wood}
              />
            </group>
            <group position={[-1.8, 2.52, 0.53]} scale={1.59}>
              <mesh
                geometry={nodes.Object_165.geometry}
                material={materials["Computer-beige"]}
              />
            </group>
            <group
              position={[0.28, 2.52, -0.34]}
              rotation={[0, -0.17, 0]}
              scale={0.86}
            >
              <group
                position={[-0.08, 1.27, -0.02]}
                rotation={[0, 0.06, 0]}
                scale={1.76}
              >
                <mesh
                  geometry={nodes.Object_171.geometry}
                  material={materials.Grey}
                />
                <mesh
                  geometry={nodes.Object_172.geometry}
                  material={materials.Yellow_Glow}
                />
                <group
                  position={[-0.17, 0.18, 0.29]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <mesh
                    geometry={nodes.Object_174.geometry}
                    material={materials.Black}
                  />
                </group>
                <group position={[0, 0, -0.12]}>
                  <mesh
                    geometry={nodes.Object_176.geometry}
                    material={materials.Black}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_178.geometry}
                  material={materials.Grey}
                />
                <mesh
                  geometry={nodes.Object_180.geometry}
                  material={materials.Black}
                />
                <group position={[0.48, 0.03, 0.32]}>
                  <mesh
                    geometry={nodes.Object_182.geometry}
                    material={materials.Yellow_Glow}
                  />
                </group>
                <group position={[0.36, 0.31, 0.08]} rotation={[0, -0.32, 0]}>
                  <mesh
                    geometry={nodes.Object_184.geometry}
                    material={materials.Black}
                  />
                </group>
                <group position={[0.36, 0.26, 0.08]} rotation={[0, -0.5, 0]}>
                  <mesh
                    geometry={nodes.Object_186.geometry}
                    material={materials.Black}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_169.geometry}
                  material={materials.Grey}
                />
              </group>
              <group position={[0.73, 0.65, 0.53]}>
                <mesh
                  geometry={nodes.Object_188.geometry}
                  material={materials.Black}
                />
                <mesh
                  geometry={nodes.Object_189.geometry}
                  material={materials.Yellow_Glow}
                />
              </group>
              <mesh
                geometry={nodes.Object_191.geometry}
                material={materials.Black}
              />
              <mesh
                geometry={nodes.Object_192.geometry}
                material={materials.TV_screen}
              />
              <group position={[0, 0, -0.02]}>
                <mesh
                  geometry={nodes.Object_194.geometry}
                  material={materials.Grey}
                />
              </group>
              <mesh
                geometry={nodes.Object_167.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              geometry={nodes.Object_144.geometry}
              material={materials.Wood}
            />
          </group>
          <group
            position={[2.85, -0.03, 0.27]}
            rotation={[-Math.PI, 1.05, -Math.PI]}
            scale={[0.64, 0.86, 0.64]}
          >
            <group
              position={[-0.6, 1.14, 0.48]}
              rotation={[0, 1.06, 0]}
              scale={[1.57, 1.16, 1.57]}
            >
              <group position={[-0.06, 0, -0.01]} rotation={[0, -0.2, 0]}>
                <mesh
                  geometry={nodes.Object_200.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0.2, 0, 0.13]} rotation={[0, -0.98, 0]}>
                <mesh
                  geometry={nodes.Object_202.geometry}
                  material={materials.material_0}
                />
              </group>
              <mesh
                geometry={nodes.Object_198.geometry}
                material={materials.material_0}
              />
            </group>
            <group scale={1.18}>
              <mesh
                geometry={nodes.Object_204.geometry}
                material={materials.Wood}
              />
            </group>
            <mesh
              geometry={nodes.Object_196.geometry}
              material={materials.Wood}
            />
          </group>
          <group position={[-3.72, 6.41, 0]}>
            <mesh
              geometry={nodes.Object_206.geometry}
              material={materials.Metal}
            />
          </group>
          <group position={[-3.72, 6.41, 4]}>
            <mesh
              geometry={nodes.Object_208.geometry}
              material={materials.Metal}
            />
          </group>
          <group position={[0.13, 0, 3.65]}>
            <mesh
              geometry={nodes.Object_210.geometry}
              material={materials.Metal}
            />
          </group>
          <group position={[-2.04, 2, -3.27]}>
            <mesh
              geometry={nodes.Object_212.geometry}
              material={materials["Computer-beige"]}
            />
          </group>
          <group position={[-3, 2, -2.32]}>
            <mesh
              geometry={nodes.Object_214.geometry}
              material={materials.material_0}
            />
          </group>
          <group position={[1.56, 2.89, -3.46]} rotation={[0, 0.19, 0]}>
            <mesh
              geometry={nodes.Object_216.geometry}
              material={materials.Black}
            />
          </group>
          <group position={[2.81, 2.14, -3.76]}>
            <mesh
              geometry={nodes.Object_218.geometry}
              material={materials.Black}
            />
          </group>
          <group position={[-3.94, 5.36, -0.63]}>
            <mesh
              geometry={nodes.Object_220.geometry}
              material={materials["Black-gloss"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
