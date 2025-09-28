"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo } from "react"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery, } from 'react-responsive'
import CanvasLoader from "@/components/loaders/canvas-loader";
import { ScifiMonitor } from "@/components/3d-models/scifi-monitor";
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
          scale: 40
        },
      }
    }

    return {
      flyingDrone: {
        scale: 35
      },
    }
  }, [isScreenLg])

  return (
    <>
      <div className="size-[500px] absolute -left-32 lg:-left-52 -bottom-80 md:-bottom-72 overflow-visible bg-transparent opacity-60">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader displayNone />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {isScreenSm && <OrbitControls enableZoom={false} target={[0, 0, 0]} />}
            <group>
              <ScifiMonitor
                position={[0, 0, 0]}
                rotation={[0, 0.54, 0.42]}
                scale={[modelProperties.flyingDrone.scale, modelProperties.flyingDrone.scale, modelProperties.flyingDrone.scale]}
              />
            </group>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}
export default Floating3DModels