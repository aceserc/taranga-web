import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo } from "react"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { VRHeadset } from "@/components/3d-models/vr-headset";
import CanvasLoader from "@/components/loaders/canvas-loader";
// import { motion } from "framer-motion";
// import { Pistol } from "@/components/3d-models/pistol";
// import { Laptop } from "@/components/3d-models/laptop";
import { Robot } from "@/components/3d-models/robot";
import { useMediaQuery, } from 'react-responsive'
import { ScifiMonitor } from "@/components/3d-models/scifi-monitor";

type ModelProperties = {
  vrHeadset: {
    scale: number
  }
  screen: {
    scale: number
  }
  laptop: {
    scale: number
  }
  robot: {
    scale: number
  }
}

const Floating3DModels = () => {
  const isScreenLg = useMediaQuery({ query: '(min-width: 1024px)' })
  const isScreenSm = useMediaQuery({ query: '(min-width: 640px)' })

  const modelProperties = useMemo<ModelProperties>(() => {
    if (isScreenLg) {
      return {
        vrHeadset: {
          scale: 40
        },
        screen: {
          scale: 40
        },
        laptop: {
          scale: 20
        },
        robot: {
          scale: 13
        }
      }
    }

    return {
      vrHeadset: {
        scale: 30
      },
      screen: {
        scale: 35
      },
      laptop: {
        scale: 16
      },
      robot: {
        scale: 9
      }
    }
  }, [isScreenLg])

  return (
    <>
      {/* <motion.div className="size-[400px] absolute -right-20 -top-12 md:-right-9 md:-top-8 overflow-visible bg-transparent"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // Yoyo effect
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader displayNone />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {isScreenSm && <OrbitControls enableZoom={false} target={[0, 0, 0]} />}
            <group>
              <VRHeadset
                position={[0, 0, 0]}
                scale={[modelProperties?.vrHeadset.scale, modelProperties?.vrHeadset.scale, modelProperties?.vrHeadset.scale]}
                rotation={[0.36, 5.82, 0]}
              />
            </group>

            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </motion.div> */}
      <div className="size-[400px] absolute -left-24 md:left-0 -top-16 overflow-visible bg-transparent">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader displayNone />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {isScreenSm && <OrbitControls enableZoom={false} target={[0, 0, 0]} />}

            <group>
              <ScifiMonitor position={[0, 0, 0]}
                scale={[modelProperties?.screen.scale, modelProperties?.screen.scale, modelProperties?.screen.scale]}

              />
            </group>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      {/* <motion.div className="size-[400px] absolute -left-24 md:left-0 -bottom-24 md:-bottom-20 overflow-visible bg-transparent opacity-60"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // Yoyo effect
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader displayNone />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {isScreenSm && <OrbitControls enableZoom={false} target={[0, 0, 0]} />}
            <group>
              <Laptop
                position={[0, 0, 0]}
                scale={[modelProperties?.laptop.scale, modelProperties?.laptop.scale, modelProperties?.laptop.scale]}
                rotation={[0.8, 1, -0.4]}
              />
            </group>

            <ambientLight
              intensity={4.1}
            />
            <directionalLight
              position={[33, 1, 0]}

              intensity={1} />
          </Suspense>
        </Canvas>
      </motion.div> */}
      <div className="size-[500px] absolute -right-40 -bottom-52 md:-bottom-44 overflow-visible bg-transparent">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader displayNone />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {isScreenSm && <OrbitControls enableZoom={false} target={[0, 0, 0]} />}
            <group>
              <Robot position={[0, 0, 0]}
                rotation={[0.44, -0.5, 0]}
                scale={[modelProperties?.robot.scale, modelProperties?.robot.scale, modelProperties?.robot.scale]}
              />
            </group>

            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}
export default Floating3DModels