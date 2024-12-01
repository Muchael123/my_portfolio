
import { useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface NParams {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
  spring?: number;
}

const useCanvasCursor = () => {
  class n {
    phase!: number;
    offset!: number;
    frequency!: number;
    amplitude!: number;

    constructor(e: NParams) {
      this.init(e || {});
    }

    init(e: NParams) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    }

    update() {
      return (this.phase += this.frequency), (e = this.offset + Math.sin(this.phase) * this.amplitude);
    }

    value() {
      return e;
    }
  }

  class Line {
    spring: number;
    friction: number;
    nodes: Node[];

    constructor(e: NParams) {
      this.spring = 0;
      this.friction = 0;
      this.nodes = [];
      this.init(e || {});
    }

    init(e: NParams) {
      this.spring = (e.spring ?? 0) + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let t: Node, n = 0; n < E.size; n++) {
        t = { x: pos.x, y: pos.y, vx: 0, vy: 0 };
        this.nodes.push(t);
      }
    }

    update() {
      let e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (let n, i = 0, a = this.nodes.length; i < a; i++)
        (t = this.nodes[i]),
          0 < i &&
            ((n = this.nodes[i - 1]),
            (t.vx += (n.x - t.x) * e),
            (t.vy += (n.y - t.y) * e),
            (t.vx += n.vx * E.dampening),
            (t.vy += n.vy * E.dampening)),
          (t.vx *= this.friction),
          (t.vy *= this.friction),
          (t.x += t.vx),
          (t.y += t.vy),
          (e *= E.tension);
    }

    draw() {
      let e,
        t,
        n = this.nodes[0].x,
        i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      let a;
      let o = this.nodes.length - 2;
      for (a = 1; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      e = this.nodes[a];
      t = this.nodes[a + 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  function onMousemove(e: MouseEvent | TouchEvent) {
    function o() {
      lines = [];
      for (let e = 0; e < E.trails; e++) lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }));
    }
    function c(e: MouseEvent | TouchEvent) {
      if ("touches" in e) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
      e.preventDefault();
    }
    function l(e: TouchEvent) {
      if (e.touches.length === 1) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      }
    }
    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("touchstart", onMousemove);
    document.addEventListener("mousemove", c);
    document.addEventListener("touchmove", c);
    document.addEventListener("touchstart", l);
    c(e);
    o();
    render();
  }

  function render() {
    if (ctx.running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",50%,50%,0.2)";
      ctx.lineWidth = 1;
      for (let e, t = 0; t < E.trails; t++) {
        e = lines[t];
        e.update();
        e.draw();
      }
      ctx.frame++;
      window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  interface Pos {
    x: number;
    y: number;
  }

  interface Ctx extends CanvasRenderingContext2D {
    running: boolean;
    frame: number;
  }

  let ctx: Ctx;
  let f: InstanceType<typeof n>;
  let e: number = 0;
  let pos: Pos = { x: 0, y: 0 };
  let lines: Array<InstanceType<typeof Line>> = [];
  let E = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  const renderCanvas = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
    if (canvas) {
      ctx = canvas.getContext("2d") as Ctx;
    }
    ctx.running = true;
    ctx.frame = 1;
    f = new n({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    });
    window.addEventListener("blur", () => {
      ctx.running = true;
    });
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener("blur", () => {
        ctx.running = true;
      });
    };
  }, []);
};

export default useCanvasCursor;
