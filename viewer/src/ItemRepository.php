<?php
namespace PowerBook;

/**
 * @author Iltar van der Berg <kjarli@gmail.com>
 */
class ItemRepository
{

    private $aionDB;

    public function __construct($aionDB)
    {
        $this->aionDB = $aionDB;
    }

    /**
     * @param  int $id
     * @return Item
     */
    public function findItem($id)
    {
        $item = $this->aionDB->query("SELECT id, mesh, equipment_slots FROM client_items WHERE id = ? ", $id)->fetchArray();

        if ($item['id'] == null) {
            return null;
        }

        return new Item(strtolower($item['mesh']), $item['equipment_slots']);
    }

    public function findNPC($id) {

        $item = $this->aionDB->query("SELECT id, dir, mesh FROM npc_clients WHERE id = ? ", $id)->fetchArray();

        if ($item == null) {
            return null;
        }

        $dir = strtr($item['dir'], array(
            "npclevel_objectportal" => "npc/level_object/portal",
            " " => ""
        ));

        return new Item($dir . '/' . $item['mesh'], "");

    }

    public function findRobot ($id) {
        $item = $this->aionDB->query("SELECT i.id id, r.mesh_body mesh FROM client_items i LEFT JOIN robot r ON r.name = i.robot_name WHERE i.id = ? ", $id)->fetchArray();

        if ($item == null) {
            return null;
        }

        return new Item($item['mesh'], "");
    }
}
