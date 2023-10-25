const KbmTitle = ({ title, subTitle }) => {
  return (
    <div className="my-5">
      <div className="relative z-0  pl-2 md:pl-4">
        <div className="relative flex items-center gap-2">
          <div className="absolute left-7 z-20 h-24 w-4 -skew-x-[20deg] kbm-bg-secondary"></div>
          <div className="h-14 w-2 -skew-x-[20deg] z-10 kbm-bg-primary"></div>
          <div className="flex flex-col justify-end relative h-14 w-75 md:w-90 -skew-x-[20deg] kbm-bg-primary">
            <h2 className="pl-10 uppercase pb-1 font-semibold kbm-white text-2xl tracking-wider skew-x-[20deg]">
              {title}
            </h2>
            <div className="translate-x-5 md:translate-x-1/2 self-end -mb-2 -skew-x-[20deg] kbm-bg-secondary">
              <h4 className="py-[1px] px-5 text-center uppercase kbm-white text-xs tracking-wider skew-x-[35deg]">
                {subTitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 -z-1 h-[2px] ml-5 w-full kbm-bg-primary opacity-0 md:opacity-30"></div>
      </div>
    </div>
  );
};

export default KbmTitle;
