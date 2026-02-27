import dynamic from "next/dynamic";

const StageView = dynamic(() => import("@/components/stage/StageView"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center">
      Initializing 3D Engine...
    </div>
  ),
});

export default StageView;
