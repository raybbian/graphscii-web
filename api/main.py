import networkx as nx
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

from graphscii import to_ascii

app = FastAPI()


origins = [
    "http://localhost:3000",
    "https://graphscii.raybb.dev"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Graph(BaseModel):
    data: str


@app.post("/get_ascii/")
async def get_ascii(graph: Graph):
    g = nx.Graph()

    lines = graph.data.strip('\n').split('\n')
    if len(lines) > 100:
        raise HTTPException(status_code=400, detail="Graph too large for live demo!")
    for line in lines:
        info = line.split(' ')
        if len(info) == 1:
            g.add_node(info[0])
        elif len(info) == 2:
            g.add_edge(info[0], info[1])

    return to_ascii(g, with_labels=True)
