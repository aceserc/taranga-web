"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo } from "react"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery, } from 'react-responsive'
import CanvasLoader from "@/components/loaders/canvas-loader";
import { FlyingDrone } from "@/components/3d-models/flying-drone";

type ModelProperties = {
  flyingDrone: {
    scale: number
  }
}

const Floating3DModels = () => {
  const isScreenLg = useMediaQuery({ query: '(min-width: 1024px)' })
  const isScreenSm = useMediaQuery({ query: '(min-width: 640px)' })


  const modelProperties = useMemo<ModelProperties>(() => {
    if (isScreenLg) {
      return {
        flyingDrone: {
          scale: 4.12
        },
      }
    }

    return {
      flyingDrone: {
        scale: 3.5
      },
    }
  }, [isScreenLg])

  return (
    <>
      <div className="size-[500px] absolute -right-32 lg:-right-60  2xl:-right-96 -bottom-[22rem] sm:-bottom-80 md:-bottom-72 overflow-visible bg-transparent">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader displayNone />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {isScreenSm && <OrbitControls enableZoom={false} target={[0, 0, 0]} />}
            <group>
              <FlyingDrone
                position={[0, 0, 0]}
                rotation={[0.76, 4.42, 0]}
                scale={[modelProperties.flyingDrone.scale, modelProperties.flyingDrone.scale, modelProperties.flyingDrone.scale]}
              />
            </group>

            <ambientLight intensity={0.9} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}
export default Floating3DModels