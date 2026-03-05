# EscenasSensoriales

Este repositorio propone un **ecosistema del Espacio Geográfico Híbrido Digital (EGHD)**: un marco para conectar territorio físico, capas digitales, comunidades y experiencias sensoriales interactivas.

## Contenido

- [Visión general del ecosistema](docs/ecosistema_espacio_geografico_hibrido_digital.md)

## Objetivo

Diseñar una base conceptual y operativa para crear escenarios donde:

1. El espacio físico (barrios, paisajes, rutas) se sincroniza con datos en tiempo real.
2. La ciudadanía co-crea significado mediante narrativas, sensores y cartografías colaborativas.
3. Las interfaces híbridas (móvil, web, AR, instalaciones) activan experiencias sensoriales situadas.

## Próximos pasos sugeridos

- Prototipar una capa de datos geoespaciales mínima (POI, rutas, eventos).
- Definir un piloto local con actores comunitarios.
- Implementar un primer recorrido sensorial híbrido.

## Componente de audio con carátula

Se agregó un componente reutilizable para mostrar audio con imagen/carátula:

- `components/audio/AudioWithCover.tsx`

Ejemplo de uso:

```tsx
import AudioWithCover from "@/components/audio/AudioWithCover";

<AudioWithCover
  src="/audio/paisaje-sonoro.mp3"
  coverImage="/images/paisaje-sonoro.jpg"
  title="Paisaje Sonoro"
  artist="Escenas Sensoriales"
/>
```
