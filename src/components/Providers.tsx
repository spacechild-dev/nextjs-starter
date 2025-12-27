"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  BorderStyle,
  ChartMode,
  ChartVariant,
  DataThemeProvider,
  IconProvider,
  LayoutProvider,
  NeutralColor,
  ScalingSize,
  Schemes,
  SolidStyle,
  SolidType,
  SurfaceStyle,
  Theme,
  ThemeProvider,
  ToastProvider,
  TransitionStyle,
} from "@once-ui-system/core";
import { style, dataStyle } from "../resources/once-ui.config";
import { iconLibrary } from "../resources/icons";
import { LanguageProvider } from "../context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentBrand, setCurrentBrand] = useState(style.brand);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hostname.includes("daiquiri")) {
        setCurrentBrand("amber"); // Closest to Classic Daiquiri (Lime/Yellow)
      } else {
        setCurrentBrand("emerald"); // Personal site
      }
    }
  }, []);

  return (
    <SessionProvider>
      <LayoutProvider>
        <ThemeProvider
          theme={style.theme as Theme}
          brand={currentBrand as Schemes}
          accent={currentBrand as Schemes}
          neutral={style.neutral as NeutralColor}
          solid={style.solid as SolidType}
          solidStyle={style.solidStyle as SolidStyle}
          border={style.border as BorderStyle}
          surface={style.surface as SurfaceStyle}
          transition={style.transition as TransitionStyle}
          scaling={style.scaling as ScalingSize}
        >
          <DataThemeProvider
            variant={dataStyle.variant as ChartVariant}
            mode={dataStyle.mode as ChartMode}
            height={dataStyle.height}
            axis={{
              stroke: dataStyle.axis.stroke,
            }}
            tick={{
              fill: dataStyle.tick.fill,
              fontSize: dataStyle.tick.fontSize,
              line: dataStyle.tick.line,
            }}
          >
            <ToastProvider>
              <LanguageProvider>
                <IconProvider icons={iconLibrary}>{children}</IconProvider>
              </LanguageProvider>
            </ToastProvider>
          </DataThemeProvider>
        </ThemeProvider>
      </LayoutProvider>
    </SessionProvider>
  );
}
